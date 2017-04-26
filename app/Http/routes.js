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

// Route.get('/','ListController.show')
// Route.get('/login','AuthController.index')
// Route.port('/login','AuthController')
//
// Route.get('/register','RegisterController.index')
// Route.post('register', 'RegisterController.doRegister')

Route.on('/').render('welcome')
Route.on('/master').render('master')
Route.on('/admin').render('admin')
Route.on('/member').render('member')
Route.on('/operator').render('operator')
Route.on('/supir').render('supir')
Route.resource('driverIUD','DriverController')
Route.resource('memberIUD','MemberController')
Route.resource('adminIUD','AdminController')
Route.resource('operatorIUD','OperatorController')
Route.resource('zoneIUD','ZoneController')
Route.resource('userIUD','UserController')
Route.resource('transactionIUD','TransactionController')
Route.resource('motorIUD','MotorController')
