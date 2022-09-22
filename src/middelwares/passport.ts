import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import { UserSchema } from "../entity/UserSchema";

const opts: StrategyOptions={
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'mySecret'
}


export default new Strategy(opts, async (payload, done)=>{
    try {
        const user = await UserSchema.findOneBy({id: payload.id})
        if (user) {
            return done(null, user);
        }
        return done(null, false);
        
    } catch (error) {
        if (error instanceof Error) {
            console.log(error)
        }
    }
})