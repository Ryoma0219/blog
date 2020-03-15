// Packages
import { Component, cloneElement, Children } from 'react';
import { findDOMNode } from 'react-dom';

// Private Observer Manager functions and manager
import { getObserver, observeTarget, unobserveTarget } from './manager';
import { hasEqualOptions, isDOMNode } from './utils';

const getOptions = props => ({
  root: props.root,
  rootMargin: props.rootMargin,
  threshold: props.threshold
});

export default class Observer extends Component {
  shouldReobserve = false;

  static defaultProps = {
    disabled: false,
    once: false
  };

  componentDidMount() {
    this.observer = getObserver(getOptions(this.props));
    this.observe();
  }

  componentDidUpdate() {
    if (this.shouldReobserve) {
      this.observe();
      this.shouldReobserve = false;
    }
  }

  componentWillUnmount() {
    this.unobserve();
  }

  handleTarget = node => {
    // eslint-disable-next-line
    const element = isDOMNode(node) ? node : findDOMNode(node);
    if (this.target && this.target !== element) {
      this.unobserve();
      this.shouldReobserve = true;
    }
    this.target = element;
  };

  handleIntersect = entry => {
    this.props.onIntersect(entry, this.props.value);
    if (this.props.once && entry.isIntersecting) {
      this.unobserve();
    }
  };


  observe() {
    if (!this.props.disabled) {
      observeTarget(this.observer, this.target, this.handleIntersect);
    }
  }

  unobserve() {
    unobserveTarget(this.observer, this.target);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const nextOptions = getOptions(nextProps);
    if (!hasEqualOptions(this.observer, nextOptions)) {
      this.unobserve();
      this.observer = getObserver(nextOptions);
      this.shouldReobserve = true;
    }

    if (this.props.disabled && !nextProps.disabled) {
      this.shouldReobserve = true;
    }

    if (!this.props.disabled && nextProps.disabled) {
      this.unobserve();
    }
  }

  render() {
    return this.props.render
      ? this.props.render({ innerRef: this.handleTarget })
      : cloneElement(Children.only(this.props.children), {
          ref: this.handleTarget
        });
  }
}
