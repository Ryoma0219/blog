import { hasEqualOptions, parseOptions } from './utils';

if (typeof window !== 'undefined') {
  require('intersection-observer');
}

const manager = (function makeManager() {
  const observers = new Map();

  function findObserver(options = {}) {
    const parsedOptions = parseOptions(options);
    for (const observer of observers.keys()) {
      if (hasEqualOptions(observer, parsedOptions)) {
        return observer;
      }
    }
    return null;
  }

  function intersectionCallback(entries, observer) {
    for (let entry of entries) {
      const handlers = getObserverTargets(observer);
      console.log(handlers)
      const handler = handlers.get(entry.target);
      if (handler) {
        handler(entry);
      }
    }
  }

  function getObserver(options) {
    return (
      findObserver(options) ||
      new IntersectionObserver(intersectionCallback, options)
    );
  }

  function getObserverTargets(observer) {
    return !observers.has(observer)
      ? observers.set(observer, new Map()).get(observer)
      : observers.get(observer);
  }

  function observeTarget(observer, target, handler) {
    const targets = getObserverTargets(observer);
    targets.set(target, handler);
    observer.observe(target);
  }

  function unobserveTarget(observer, target) {
    const handlers = getObserverTargets(observer);
    handlers.delete(target);
    observer.unobserve(target);
  }

  return {
    getObserver,
    observeTarget,
    unobserveTarget
  };
})();

export default manager;
export const { getObserver } = manager;
export const { observeTarget } = manager;
export const { unobserveTarget } = manager;
