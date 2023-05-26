const { Record, Category } = require('../models')

const recordController = {
  getRecords: (req, res) => {
    const categoryId = req.query.categoryId || ''
    let sumAmounts = 0
    return Promise.all([Record.findAll({
      include: Category,
      where: {
        ...categoryId ? { categoryId } : {},
        userId: req.user.id
      },
      nest: true,
      raw: true
    }),
    Category.findAll({
      nest: true,
      raw: true
    })
    ])
      .then(([records, categories]) => {
        const totalAmounts = records.map(record => record.amount)
        let sumAmounts = 0
        totalAmounts.forEach(amount => { 
          sumAmounts = sumAmounts + amount 
        })
        res.render('records', { records, categories, sumAmounts })
      })

  },
  createRecord: (req, res) => {
    return Category.findAll({
      nest: true,
      raw: true
    })
      .then(categories => {
        res.render('create-record', { categories })
      })
  },
  postRecord: (req, res, next) => {
    const { name, date, amount, categoryId } = req.body
    if (!name) throw new Error('Record name is required!')
    return Record.create({
      name,
      date,
      amount,
      categoryId,
      userId: req.user.id
    })
      .then(() => {
        req.flash('success_messages', 'record was successfully created')
        res.redirect('/records')
      })
      .catch(err => next(err))
  },
  editRecord: (req, res, next) => {
    return Promise.all([
      Record.findByPk(req.params.id, {
        raw: true
      }),
      Category.findAll({
        nest: true,
        raw: true
      })
    ])
      .then(([record, categories]) => {
        if (!record) throw new Error("Record didn't exist!")
        res.render('edit-record', {
          record,
          categories
        })
      })
      .catch(err => next(err))
  },
  putRecord: (req, res, next) => {
    const { name, date, amount, categoryId } = req.body
    if (!name) throw new Error('Restaurant name is required!')

    Record.findByPk(req.params.id)
      .then((record) => {
        if (!record) throw new Error("Record didn't exist!")
        return record.update({
          name,
          date,
          amount,
          categoryId
        })
      })
      .then(() => {
        req.flash('success_messages', 'record was successfully to update')
        res.redirect('/records')
      })
      .catch(err => next(err))
  },
  deleteRecord: (req, res, next) => {
    return Record.findByPk(req.params.id)
      .then(record => {
        if (!record) throw new Error("Record didn't exist!")
        return record.destroy()
      })
      .then(() => res.redirect('/record'))
      .catch(err => next(err))
  }
}

module.exports = recordController