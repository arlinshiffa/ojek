
'use strict'

const Driver= use('App/Model/Driver')
const User = use('App/Model/User')
const Motor = use('App/Model/Motor')
const DriversMotor =use('App/Model/Motor')
const Hash = use('Hash')

class DriverController {

  * index(request, response) {
    const drivers = yield Driver.all()
    const user = yield User.all()
    const motor = yield Motor.all()
    const driversMotor = yield DriversMotor.all()
    yield response.sendView('driver/index', {drivers:drivers.toJSON(), user:user.toJSON(), motor:motor.toJSON(), driversMotor:driversMotor.toJSON()})
  }

  * create(request, response) {
    yield response.sendView('driver/create')
    yield response.sendView('driver/index', {users:user.toJSON(), user:user.toJSON(), motor:motor.toJSON(), driversMotor:driversMotor.toJSON()})
  }

  * store(request, response) {
    const user = new User()
    const driver = new Driver()
    const motor = new Motor()
    const driversMotor = new driversMotor()
    user.username = request.input('userName')
    user.password = request.input('password')
    user.role='4'
    yield user.save()
    const userLast = yield User.last()

    motor.LicensePlate = request.input('LicensePlate')
    motor.color = request.input('color')
    motor.type = request.input('type')
    yield motor.save()

    driver.number= request.input('number')
    driver.SIM = request.input('SIM')
    driver.status = '0';
    driver.name = request.input('name')
    driver.idUser = userLast.id
    yield driver.save()

    driversMotor.idMotor = motor.id
    driversMotor.idDriver = driver.id
    driversMotor.LicensePlate= motor.LicensePlate
    driversMotor.color= motor.color
    driversMotor.status= driver.status
    driversMotor.name = driver.name
    driversMotor.SIM = driver.SIM
    yield driversMotor.save()
  }

  * show(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    const user= yield User.findBy('id',driver.idUser)

    yield response.sendView('driver/show',{driver:driver.toJSON(),user:user.toJSON()})
  }

  * edit(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    const user= yield User.findBy('id',driver.idUser)
    const driversMotor = yield DriversMotor.findBy('idDriver', driver.id)
    yield response.sendView('driver/edit',{driver:driver.toJSON(),user:user.toJSON()})
  }

  * update(request, response) {
    const driverData = request.except('_csrf','submit')
    const driver= yield Driver.findBy('id', request.param('id'))
    const userData = request.except('_csrf','submit')
    const user= yield User.findBy('id', driver.idUser)
    const driversMotorData = request.except('_csrf','submit')
    const driversMotor= yield User.findBy('idDriver', driver.id)
    const motorData = request.except('_csrf','submit')
    const motor= yield User.findBy('id', driversMotor.idMotor)

    driver.name = driverData.name
    driver.SIM = driverData.SIM
    driver.status = driverData.status
    driver.number = driverData.number

    motor.LicensePlate= motorData.LicensePlate
    motor.color=motorData.color
    motor.type=motorData.type

    user.userName = userData.userName
    user.password = yield Hash.make(userData.password)

    driversMotor.idMotor = motor.id
    driversMotor.idDriver = driver.id
    driversMotor.LicensePlate= motor.LicensePlate
    driversMotor.color= motor.color
    driversMotor.status= driver.status
    driversMotor.name = driver.name
    driversMotor.SIM = driver.SIM

    yield driver.save()
    yield user.save()
    yield motor.save()
    yield driversMotor.save()
    yield response.redirect(request.param('id'))

  }

  * destroy(request, response) {
    const driver =yield Driver.findBy('id', request.param('id'))
    const user = yield User.findBy('id',driver.idUser)
    const driversMotor= yield User.findBy('idDriver', driver.id)
    const motor= yield User.findBy('id', driversMotor.idMotor)

    yield driversMotor.delete()
    yield driver.delete()
    yield user.delete()
    yield motor.delete()
    yield response.redirect('/driverIUD')
  }

}

module.exports = DriverController
