import { Button } from '@consta/uikit/Button';
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
      <Button
        label="Перезагрузить страницу"
        onClick={() => window.location.reload()}
      />
    </div>
  );
}

export default FetchError;
