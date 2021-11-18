const { Router } = require('express')

const router = Router()

router.get('/book', async (req, res) => {
    res.json({
        ok: true
    })
})

module.exports = router
