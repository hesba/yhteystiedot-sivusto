const mongoose = require('mongoose')

const SupTeam = new mongoose.Schema(
    {
        title: String,
        support_group: String,
        service_provider: String,
        description: String,
    },
    { timestamps: true }
)

module.exports = mongoose.model('supteam', SupTeam, 'supteams')
