import { User } from "../models/user.model.js"

const getUsers = async (req, res) => {
    try {
        
        const loggedInUserId = req.user._id
        if(!loggedInUserId){
            throw new Error("Not authenticated")
        }

        const allUsers = await User.find().select(" -password ")

        res.status(200).json(allUsers)

    } catch (error) {
        console.error("Error fetching users for sidebar", error.message)
        res.status(500).json({error: "Internal Server Error"})
    }
}


const deleteUser = async (req, res) => {
    try {
        
        const {userId} = req.params
        const user = await User.findByIdAndDelete(userId)

        if(!user){
            throw new Error("User not found")
        }

        res.status(200).json({message: 'User deleted successfully'})

    } catch (error) {
        console.log("Error deleting user", error.message)
        res.status(404).json({message: "Error while deleting User"})
    }
}


export {
    getUsers,
    deleteUser
}