### request

| key           | type |
| ------------- | ---- |
| originVideo   | File |
| needTranslate | bool |

### response

| key                  | type           |
| -------------------- | -------------- |
| success              | bool           |
| message              | String         |
| code                 | int            |
| originResultText     | list\<String\> |
| translatedResultText | list\<String\> |
| keywords             | list\<String\> |
| needTranslation      | bool           |

```javascript
POST / upload;
```
