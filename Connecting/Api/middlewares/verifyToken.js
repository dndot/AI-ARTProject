const jwr=require("jsonwebtoken");
const {CustomError}=require("./error");

const verifyToken=(req,res,next) => {
    const token = req.cookies.token;

    if (!token){
        throw new CustomError("You are not authorized to access",401);
    }

    jwr.verify(token,process.env.JWT_SECRET, async(err,data)=>{
        if (err) {
            throw new CustomError("token is invalid",403);

        }
        req.userId=data._id;
        next();
    })

};

module.exports = verifyTokens;