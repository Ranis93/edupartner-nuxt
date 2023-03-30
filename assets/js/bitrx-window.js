export function insertBitrix1 (parentNode, position) {
  // Связаться с нами. Отправить имя и 

  const pNode = document.querySelector(parentNode) // В какой родительский элемент
  const pos = pNode.querySelector(position) // Перед каким элементом
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/102/0gdx41')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b8906615/crm/form/loader_102.js');"
  pNode.insertBefore(recaptchaScript, pos)
}
export function insertBitrix2 (parentNode, position) {
  // Разработка сайта, кнопка заказать сайт
  const pNode = document.querySelector(parentNode) // В какой родительский элемент
  const pos = pNode.querySelector(position) // Перед каким элементом
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/104/qaocv1')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b8906615/crm/form/loader_104.js');"
  pNode.insertBefore(recaptchaScript, pos)
}
export function insertBitrix3 (parentNode, position) {
  // Интернет-маркетинг
  const pNode = document.querySelector(parentNode) // В какой родительский элемент
  const pos = pNode.querySelector(position) // Перед каким элементом
  const recaptchaScript = document.createElement('script')
  recaptchaScript.setAttribute('data-b24-form', 'click/106/5hl53a')
  recaptchaScript.setAttribute('data-skip-moving', 'true')
  recaptchaScript.innerHTML = "(function(w,d,u){var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);})(window,document,'https://cdn-ru.bitrix24.ru/b8906615/crm/form/loader_106.js');"
  pNode.insertBefore(recaptchaScript, pos)
}