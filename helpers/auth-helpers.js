// 負責管理使用者驗證，權則分離，避免passport套件的設定有調整需進入app.js修改
const getUser = req => {
  return req.user || null
}
const ensureAuthenticated = req => {
  return req.isAuthenticated()
}
module.exports = {
  getUser,
  ensureAuthenticated
}