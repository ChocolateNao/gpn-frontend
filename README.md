# Введение

Доброго времени суток тому, кто смотрит/проверяет эту работу. Меня зовут Андрей, и я мечу во фронтэнд-разработчики прямо с биотехнологии.

На выполнение задания ушло примерно пара часов. Большую часть пришлось разбираться с библиотекой графиков.

![chart-app](https://i.imgur.com/nI6yRW9.png)

## Установка

1. Склонировать репозиторий.
2. Установить зависимости при помощи `npm install`.
3. Запустиь приложение при помощи команды:

```bash
npm run start
```

## Порядок работы

1. Первым делом я собрал файловую структуру самого обычного React-проекта и принялся за типизацию.
2. Далее взялся за переключатель валюты. Обмен данных о текущей валюте между компонентами реализован через контекст, для удобства пользователей выбранное значение сохраняется/обновляется в `localStorage`.
3. Пришло время нарисовать график. Немного поизучав документацию библиотеки и сделав попытку построить что-то из примеров, быстро разобрался и построил нужный график по данным из файла. Для удобства стилизации решил вынести название диаграммы в отдельный компонент.
4. Для имитации запроса с API был использован предложенный [сервис](https://mockapi.io/). Эндпоинт:

```
https://65ec4b420ddee626c9afecaf.mockapi.io/api/rates
```

5. Также реализована обработка ошибок в user-friendly формате, лоадер.

## Закючение

Благодарю за прочтение, желаю удачи!
