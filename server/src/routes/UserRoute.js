import express from "express"
import { User } from "../models/User"
import jwt from "jsonwebtoken"
import ExpressValidator from "express-validator";
import { auth } from "../middleware/auth"

const { check, validationResult } = ExpressValidator
const Router = express.Router()

Router.post("/register",     
    [
        check("username", "Please Enter a Valid Username").not().isEmpty(),
        check("email", "Please enter a valid email").isEmail(),
        check("password", "Please enter a valid password").isLength({ min: 6 })
    ], 
    async (req, res) => {
        if (!validationResult(req).isEmpty())
            return res.status(400).json({});

        const { username, email, password } = req.body;

        if (User.findOne({email}))
            return res.status(400).json({msg: "User Already Exists"});

        await (new User({username: username, password: password, email: email})).save()
            .then(() => {
                const payload = { user: { id: user.id } }
                jwt.sign(payload, "randomString", { expiresIn: 10000 }, (err, token) => {
                        if (err) throw err;
                        res.status(200).json({token});
                    }
                );        
            }).catch((err) => {res.send("failure: ${err}")})
    }
)

Router.post("/login",
    [
      check("email", "Please enter a valid email").isEmail(),
      check("password", "Please enter a valid password").isLength({ min: 6 })
    ],
    async (req, res) => {
      if (!validationResult(req).isEmpty())
        return res.status(400).json({});
  
      const { email, password } = req.body;
      try {
        const user = await User.findOne({ email });
        if (!user)
          return res.status(400).json({ msg: "User Not Exist" });
  
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
          return res.status(400).json({ msg: "Incorrect Password !"});
  
        const payload = { user: { id: user.id } }
  
        jwt.sign(payload, "randomString", { expiresIn: 3600 }, (err, token) => {
                if (err) throw err;
                res.status(200).json({token});
            }
        );
      } catch (e) {
        console.error(e);
        res.status(500).json({
          message: "Server Error"
        });
      }
    }
);
  
Router.get("/me", auth, async (req, res) => {
  try {
      // request.user is getting fetched from Middleware after token authentication
      const user = await User.findById(req.user.id);
      res.json(user);
  } catch (e) {
      res.send({ message: "Error in Fetching user" });
  }
});
  
export { Router as default };