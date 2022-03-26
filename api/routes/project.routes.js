const {Router} = require('express')
const ctr = require('../controllers/project.controller')
const router = Router()

// Admin
// /api/projects/
router.post('/admin/create', ctr.create)
router.get('/admin/:id', ctr.getById)
router.put('/admin/edit/:id', ctr.update)
router.delete('/admin/remove/:id', ctr.remove)


// Base
// /api/projects
router.get('/', ctr.getAll)

module.exports = router
