const Tienda = require("../models/Tienda");

exports.crearTienda = async (req, res) => {
    try {
        const tienda = new Tienda(req.body);

        await tienda.save();
        res.send(tienda);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerTiendas = async (req, res) => {

    try {

        const tiendas = await Tienda.find();
        res.json(tiendas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarTienda = async (req, res) => {

    try {

        const {_id, departamento, distrito, cantidad} = new Tienda(req.body);
        let tiendas = await Tienda.findById(req.params.id);

        if(!tiendas){
            res.status(404).json({ msg: 'No existe la tienda'});
        }

        departamento._id = _id;
        tiendas.departamento = departamento;
        tiendas.distrito = distrito;
        tiendas.cantidad = cantidad;

        console.log(tiendas)

        tiendas = await Tienda.findOneAndUpdate({ _id: req.params.id }, tiendas, { new: true } );
        res.json(tiendas);

        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.verTienda = async (req, res) => {

    try {

        let tiendas = await Tienda.findById(req.params.id);

        if(!tiendas){
            res.status(404).json({ msg: 'No existe la tienda'});
        }

        res.json(tiendas);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.eliminarTienda = async (req, res) => {

    try {

        let tiendas = await Tienda.findById(req.params.id);

        if(!tiendas){
            res.status(404).json({ msg: 'No existe la tienda'});
        }

        await Tienda.deleteOne({ _id: req.params.id });

        res.json({ msg: 'La tienda de ' + tiendas.distrito + ' se ha eliminado' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

