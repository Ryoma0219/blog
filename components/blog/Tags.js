import Container from '../AppContainer';

const Tags = ({ tags }) => (
  <Container padding>
    {tags.length > 0 && (
      <div className="tags">
        {tags.map((tag, index) => (
          <div key={index} className="tag">{tag}</div>
        ))}
      </div>
    )}
    <style jsx>
      {`
        .tags {
          display: flex;
        }
        .tag {
          padding: 4px 8px;
          font-size: 12px;
          border-radius: 4px;
          border: solid 1px #25d96f;
          color: #25d96f;
          margin-right: 8px;
        }
        .tag:hover {
          background: rgba(231, 242, 255, 0.9);
          transition: background 0.2s ease,color 0.2s ease,box-shadow 0.2s ease;
        }
      `}
    </style>
  </Container>
);

export default Tags;
