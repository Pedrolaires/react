import { useParams } from 'react-router-dom';

export const Abc = () => {
  const { slug, id } = useParams();
  return (
    <div>
      <h1>
        Ois {slug} {id}
      </h1>
    </div>
  );
};
