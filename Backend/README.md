# User API Documentation

## User Registration Endpoint

### Endpoint: `/user/register` 🚀

This endpoint is used to register a new user.

#### Method: POST 📬

#### Request Body 📝

The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. Must be a valid email format.
- `fullname` (object): An object containing the user's first name and last name.
  - `firstname` (string): The first name of the user. Must be at least 3 characters long.
  - `lastname` (string): The last name of the user.
- `password` (string): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

#### Response 📤

##### Success (201 Created) ✅

If the user is successfully registered, the response will be a JSON object containing the authentication token and the user details.

Example:
```json
{
  "token": "jwt-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

##### Error (400 Bad Request) ❌

If the request body is invalid, the response will be a JSON object containing the validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

##### Error (500 Internal Server Error) ⚠️

If there is an internal server error, the response will be a JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Implementation 🛠️

The `/user/register` endpoint is implemented in the `registerUser` function in the `user.controller.js` file. The route is defined in the `user.route.js` file.

## User Login Endpoint

### Endpoint: `/user/login` 🔑

This endpoint is used to log in an existing user.

#### Method: POST 📬

#### Request Body 📝

The request body should be a JSON object containing the following fields:

- `email` (string): The email address of the user. Must be a valid email format.
- `password` (string): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

#### Response 📤

##### Success (200 OK) ✅

If the user is successfully logged in, the response will be a JSON object containing the authentication token and the user details.

Example:
```json
{
  "token": "jwt-auth-token",
  "user": {
    "_id": "user-id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

##### Error (400 Bad Request) ❌

If the request body is invalid, the response will be a JSON object containing the validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters",
      "param": "password",
      "location": "body"
    }
  ]
}
```

##### Error (401 Unauthorized) 🚫

If the email or password is incorrect, the response will be a JSON object containing an error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

##### Error (500 Internal Server Error) ⚠️

If there is an internal server error, the response will be a JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Implementation 🛠️

The `/user/login` endpoint is implemented in the `loginUser` function in the `user.controller.js` file. The route is defined in the `user.route.js` file.

## User Logout Endpoint

### Endpoint: `/user/logout` 🚪

This endpoint is used to log out an authenticated user.

#### Method: POST 📬

#### Headers 📋

- `Authorization` (string): The authentication token of the user.

#### Response 📤

##### Success (200 OK) ✅

If the user is successfully logged out, the response will be a JSON object containing a success message.

Example:
```json
{
  "message": "Logged out"
}
```

##### Error (500 Internal Server Error) ⚠️

If there is an internal server error, the response will be a JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```

### Implementation 🛠️

The `/user/logout` endpoint is implemented in the `logoutUser` function in the `user.controller.js` file. The route is defined in the `user.route.js` file.

### Register a Driver 🚗

#### Endpoint
`POST /api/drivers/register`

#### Description
This endpoint registers a new driver.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname` (string, required): The first name of the driver.
  - `lastname` (string, optional): The last name of the driver.
- `email` (string, required): The email address of the driver.
- `password` (string, required): The password for the driver account (minimum 6 characters).
- `vehicle`: An object containing:
  - `type` (string, required): The type of the vehicle (must be one of "car", "motorcycle", "auto").
  - `licensePlate` (string, required): The license plate of the vehicle.
  - `color` (string, required): The color of the vehicle.
  - `capacity` (number, required): The capacity of the vehicle (must be a positive integer).

#### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123",
  "vehicle": {
    "type": "car",
    "licensePlate": "ABC123",
    "color": "red",
    "capacity": 4
  }
}
```

#### Responses

##### Success (200 OK) ✅
If the driver is successfully registered, the response will be a JSON object containing the authentication token and driver details.

Example:
```json
{
  "token": "your_jwt_token",
  "driver": {
    "_id": "driver_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "vehicle": {
      "type": "car",
      "licensePlate": "ABC123",
      "color": "red",
      "capacity": 4
    },
    "status": "inactive"
  }
}
```

##### Error (400 Bad Request) ⚠️
If the driver already exists or any required field is missing/invalid, the response will be a JSON object containing the error message.

Example:
```json
{
  "message": "Driver already exists"
}
```

##### Error (401 Unauthorized) ⚠️
If validation fails, the response will be a JSON object containing the validation errors.

Example:
```json
{
  "error": [
    {
      "msg": "Please enter a valid email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

##### Error (500 Internal Server Error) ⚠️
If there is an internal server error, the response will be a JSON object containing the error message.

Example:
```json
{
  "error": "Internal Server Error"
}
```
