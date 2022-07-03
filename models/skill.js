var mongoose = require('mongoose')
var Schema = mongoose.Schema

var SkillSchema = new Schema({
    name: { type: String, required: true, unique: true },
    relatedSkills: [{ type: Schema.Types.ObjectId, ref: 'Skill' }],
    proofOfWork: { type: String, required: true, default: "" },
    personalEndorsement: { type: String, required: true, default: "" }
})

module.exports = mongoose.model('Skill', SkillSchema)