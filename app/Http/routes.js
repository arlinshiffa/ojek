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




//on = redirect, get = manggil method di dalam, resource = manggil semua method di dlm controller

Route.resource('member','TempController')
Route.resource('/supir','HistoryDriverController')
Route.on('/admin').render('admin')
Route.resource('/operator','OperatorRekamController')
Route.on('/supir').render('supir')
Route.on('/logout').render('welcome')
Route.on('/berhasilRegister').render('berhasilRegister')

// Route.get('/driverIUD', 'UserController.show').as('profile')




Route.resource('userIUD','UserController')
Route.resource('driverIUD','DriverController')
Route.resource('memberIUD','MemberController')
Route.resource('adminIUD','AdminController')
Route.resource('operatorIUD','OperatorController')
Route.resource('zoneIUD','ZoneController')
Route.resource('userIUD','UserController')
Route.resource('transactionIUD','TransactionController')
Route.resource('motorIUD','MotorController')

Route.get('/', 'AuthController.index')
Route.post('/', 'AuthController.login')


Route.get('/register', 'RegisterController.index')
Route.post('register', 'RegisterController.doRegister')
// Route.post('/login', 'LoginController.login')


// Route.get('/greet/:user', 'UserController.greet')
// Route.get('/greet/:driver', 'DriverController.greet')
// Route.get('/greet/:operator', 'OperatorController.greet')
// Route.get('/greet/:admin', 'AdminController.greet')
