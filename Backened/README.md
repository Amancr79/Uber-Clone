# User Registration API

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

Workspace
Collecting workspace information

Here is the README.md file documenting the /users/register endpoint:

Responses:
Success (201 Created):
Description: User registered successfully.
Body: A JSON object containing the authentication token and user details.
/**/
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "socketid": null
  }
}
Client Error (400 Bad Request):
Description: Validation failed for the input data.
Body: A JSON object containing the validation errors.

{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "first name must be of at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be of 8 characters",
      "param": "password",
      "location": "body"
    }
  ]
}


# User API

## Endpoint: `/users/register`

### Method: POST

### Description:
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns an authentication token along with the user details.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string with at least 3 characters (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "first name must be of at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "password must be of 8 characters",
      "param": "password",
      "location": "body"
    }
  ]
}


# Captain API

## Endpoint: `/captain/register`

### Method: POST

### Description:
This endpoint is used to register a new captain. It validates the input data, hashes the password, creates a new captain in the database, and returns an authentication token along with the captain details.

### Request Body:
The request body should be a JSON object with the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with at least 3 characters (required)
  - `lastname`: A string (optional)
- `email`: A valid email address (required)
- `password`: A string with at least 8 characters (required)
- `vehicle`: An object containing:
  - `color`: A string with at least 3 characters (required)
  - `plate`: A string with at least 3 characters (required)
  - `capacity`: A number (required)
  - `vehicleType`: A string, one of `car`, `auto`, or `bike` (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ123",
    "capacity": 4,
    "vehicleType": "car"
  }
}

{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "hashed_password",
    "status": "inactive",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "location": {
      "lat": null,
      "lng": null
    }
  }
}{
  "errors": [
    {
      "msg": "First name must be of at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Invalid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be of at least 8 characters",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be of at least 3 characters",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be of at least 3 characters",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be a number",
      "param": "vehicle.capacity",
      "location": "body"
    }
  ]
}
{
  "message": "Captain already exists"
}