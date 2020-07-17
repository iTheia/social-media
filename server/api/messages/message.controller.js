import Room, { Message } from './message.model'
import { userModel } from '../users'
import mongoose from 'mongoose'

const ObjectId = mongoose.Types.ObjectId 

const controller = {
    async getSingle(req, res){
        const id = req.params.id
        const rooms = await Room.findById(id)
        res.status(200).send(rooms)
    },
    async getAll(req, res){
        const id =  ObjectId(req._id)
        const rooms = await Room.find({users:id},{messages:{$slice:-1}}).populate('users','name avatar').populate('messages', 'content')
        res.status(200).send(rooms)
    },
    async create(req, res){
        const id =  ObjectId(req._id)
        const { member } = req.body
        const memberExists = await userModel.findById(ObjectId(member))
        if(!memberExists){
            return res.status(400).send('error')
        }
        const room = new Room({
            messages:[],
            users:[id,ObjectId(member)]
        })
        await room.save()
        await userModel.findByIdAndUpdate(id, {$push:{rooms:room._id}})
        await userModel.findByIdAndUpdate(ObjectId(member), {$push:{rooms:room._id}})
        res.status(200).send(room)
    },
    async sendMessage(req, res){
        const id =  ObjectId(req._id)
        const room_id = ObjectId(req.params.room_id)
        controller.isMember(id, room_id)
        const message = new Message ({
            content: req.body.content,
            author:id,
            room:room_id
        })
        await Room.findByIdAndUpdate(room_id,{$push:{messages:message._id}},{new:true})
        await message.save()
        res.status(200).send(message)
    },
    async getMessages(req, res){
        const id =  ObjectId(req._id)
        const room_id = ObjectId(req.params.room_id)
        const { page } = req.body
        controller.isMember(id, room_id)
        let quantity = 3
        let start = page * quantity
        const messages = await Message.find({room:room_id},{},{skip:start , limit:quantity}).sort({createdAt:-1}).populate('author', 'name avatar')
        res.send(messages.reverse())
    },
    async isMember(id, room_id){
        const member =  await Room.findOne({_id:room_id, users:id}).select({'_id':1})
        if(!member){
            return new Error('Error')
        }
    }
}

export default controller