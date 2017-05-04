
'use strict'

const Driver= use('App/Model/Driver')
const User = use('App/Model/User')
const Motor = use('App/Model/Motor')
const DriversMotor =use('App/Model/DriversMotor')
const Hash = use('Hash')
const Database = use('Database')
const Transaction = use('App/Model/Transaction')

class DriverController {

  * index(request, response) {
    const driverDetail = yield Database.table('users').innerJoin('drivers','users.id','drivers.idUser')
    yield response.sendView('driver/index',{drivers:driverDetail})
  }

  * create(request, response) {
    yield response.sendView('driver/create')
    yield response.sendView('driver/index', { users:users.toJSON()})
  }

  * store(request, response) {
    const user = new User()
    const driver = new Driver()
    const motor = new Motor()
    const driversMotor = new DriversMotor()
    user.username = request.input('userName')
    user.password = request.input('password')
    user.number= request.input('number')
    user.name = request.input('name')
    user.role='4'
    yield user.save()
    const userLast = yield User.last()


    driver.SIM = request.input('SIM')
    driver.status = '0';

    driver.idUser = userLast.id
    yield driver.save()
    const driverLast = yield Driver.last()
    motor.licensePlate = request.input('licensePlate')
    motor.color = request.input('color')
    motor.type = request.input('type')
    yield motor.save()
    const motorLast = yield Motor.last()


    driversMotor.idMotor = motorLast.id
    driversMotor.idDriver = driverLast.id
  
    driversMotor.color= motorLast.color
    driversMotor.status= driverLast.status

    driversMotor.type = motorLast.type
    driversMotor.SIM = driverLast.SIM
    yield driversMotor.save()
  }

  * show(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    const user= yield User.findBy('id',driver.idUser)

    const driversMotor = yield DriversMotor.findBy('idDriver',driver.id)
    const motor = yield Motor.findBy('id', driversMotor.idMotor)
    yield response.sendView('driver/show',{driver:driver.toJSON(),user:user.toJSON(), motor:motor.toJSON(),driversMotor:driversMotor.toJSON()})
  }

  * edit(request, response) {
    const driver=yield Driver.findBy('id', request.param('id'))
    const user= yield User.findBy('id',driver.idUser)

    const driversMotor = yield DriversMotor.findBy('idDriver',driver.id)
    const motor = yield Motor.findBy('id', driversMotor.idMotor)
    yield response.sendView('driver/edit',{driver:driver.toJSON(),user:user.toJSON(), motor:motor.toJSON(),driversMotor:driversMotor.toJSON()})
  }


  * update(request, response) {

    const driver= yield Driver.findBy('id', request.param('id'))

    const user= yield User.findBy('id', driver.idUser)

    const driversMotor= yield DriversMotor.findBy('idDriver', driver.id)

    const motor= yield User.findBy('id', driversMotor.idMotor)

    user.name = request.input('name')
    driver.SIM =  request.input('SIM')
    driver.status =  request.input('status')
    user.number =  request.input('number')
    yield driver.save()
    motor.licensePlate= request.input('license')
    motor.color=request.input('color')
    motor.type=request.input('type')
    yield motor.save()
    user.userName = request.input('userName')
    user.password = yield Hash.make(request.input('password'))
    yield user.save()
    driversMotor.idMotor = motor.id
    driversMotor.idDriver = driver.id
    driversMotor.LicensePlate= motor.LicensePlate
    driversMotor.color= motor.color
    driversMotor.status= driver.status
    driversMotor.name = driver.name
    driversMotor.SIM = driver.SIM

    yield driversMotor.save()
    yield response.redirect(request.param('id'))

  }

  * destroy(request, response) {
    const driver =yield Driver.findBy('id', request.param('id'))
    const user = yield User.findBy('id',driver.idUser)
    const driversMotor= yield DriversMotor.findBy('idDriver', driver.id)
    console.log(driversMotor)
    const motor= yield User.findBy('id', driversMotor.idMotor)

    yield driversMotor.delete()
    yield driver.delete()
    yield user.delete()
    yield motor.delete()
    yield response.redirect('/driverIUD')
  }

}

module.exports = DriverController
