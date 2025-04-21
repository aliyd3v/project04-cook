const urlParams = new URLSearchParams(window.location.search)
const token = urlParams.get('token')

if (!token) {
    return window.location.href = 'https://aif.uz'
}

