const jwt = require('jsonwebtoken');


module.exports = function(req,res, next) {
    //Get token from header
    const token = req.header('my-auth-token');

    //check if not token
    if(!token) return res.status(401).json({ msg: 'No token, Authorization denied'});

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = decoded.user;
            next();
        } catch (e) {
            console.log(e);
            res.status(500).send({ message: "invalid token"})
        }
   
};
// const verifyToken = (req,res,next) => {
//     let token = req.headers['authorization'];
//     jwt.verify(
//         token, process.env.JWT_SECRET,
//         (err, decodedUser) => {
//             if(err || !decodedUser) return res.status(401).json({ error: 'Your are not authorized'});
//             req.user = decodedUser;
//             next();
//         }
//     )
// }
