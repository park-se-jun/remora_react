# Rest API

사용하는API는 다음과 같습니다.

## Create Text from Video

---

### call

`POST /upload`

### request

#### Content-Type

     multipart/form-data

#### Request Body

| key           | type |
| ------------- | ---- |
| originVideo   | File |
| needTranslate | bool |

### Response

#### Content-Type

    application/json

#### Response Body

| key                  | type           |
| -------------------- | -------------- |
| success              | bool           |
| message              | String         |
| code                 | int            |
| originResultText     | list\<String\> |
| translatedResultText | list\<String\> |
| keywords             | list\<String\> |
| needTranslation      | bool           |
