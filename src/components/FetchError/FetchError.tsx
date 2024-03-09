import './FetchError.css';

interface ErrorProps {
  statusCode: string | number;
}

function FetchError({ statusCode }: ErrorProps) {
  return (
    <div className="error__container">
      <p className="error__text">
        {statusCode} | Упс, прошлошла ошибка. Попробуйте снова
      </p>
    </div>
  );
}

export default FetchError;
