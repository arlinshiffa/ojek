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


// Route.resource('home','RegisterController')
// Route.get('welcome','AuthController.index')
// Route.port('welcome','AuthController')

// Route.get('/welcome','RegisterController.index')
// Route.post('welcome', 'RegisterController.doRegister')


Route.resource('welcome', 'RegisterController')
Route.on('/admin').render('admin')
Route.on('/supir').render('supir')
Route.resource('member','ChooseZoneController')
Route.resource('operator','RekamTransaksiController')


// Route.get('/driverIUD', 'UserController.show').as('profile')

Route.resource('driverIUD','DriverController')
Route.resource('memberIUD','MemberController')
Route.resource('adminIUD','AdminController')
Route.resource('operatorIUD','OperatorController')
Route.resource('zoneIUD','ZoneController')
Route.resource('userIUD','UserController')
Route.resource('transactionIUD','TransactionController')
Route.resource('motorIUD','MotorController')
