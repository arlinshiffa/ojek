'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route')

Route.on('/').render('welcome')
// Route.get('welcome','AuthController.index')
// Route.port('welcome','AuthController')

// Route.get('/welcome','RegisterController.index')
// Route.post('welcome', 'RegisterController.doRegister')

//on = redirect, get = manggil method di dalam, resource = manggil semua method di dlm controller


Route.on('/admin').render('admin')
Route.get('/member','ZoneController.member')
Route.on('/operator').render('operator')
Route.on('/driver').render('driver')

// Route.get('/driverIUD', 'UserController.show').as('profile')

Route.resource('driverIUD','DriverController')
Route.resource('memberIUD','MemberController')
Route.resource('adminIUD','AdminController')
Route.resource('operatorIUD','OperatorController')
Route.resource('zoneIUD','ZoneController')
Route.resource('userIUD','UserController')
Route.resource('transactionIUD','TransactionController')
Route.resource('motorIUD','MotorController')

Route.post('/register', 'RegisterController.doRegister')
Route.post('/login', 'LoginController.login')


Route.get('/greet/:user', 'UserController.greet')
Route.get('/greet/:driver', 'DriverController.greet')
Route.get('/greet/:operator', 'OperatorController.greet')
Route.get('/greet/:admin', 'AdminController.greet')
