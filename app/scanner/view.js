export function home(req, res) {
    res.render('index')
}

export function create_products(req, res) {
    res.render('create')
}

export async function form(req, res) {
    const { productname, productbrand, description, qrinformation } = req.body
    if (productname && qrinformation) {
        console.log('hi')
    } else {
        res.redirect('create_products')
    }
}

export function scanneer(req, res) {
    res.render('qr')
}