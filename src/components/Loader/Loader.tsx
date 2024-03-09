import { Loader as ConstaLoader } from '@consta/uikit/Loader';

function Loader() {
  return (
    <ConstaLoader
      size="m"
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
}

export default Loader;
