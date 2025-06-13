package Domain;

public interface Mejora {
    void aplicarMejora(Mano mano, Carta carta);
}

class MultiCard implements Mejora {
    @Override
    public void aplicarMejora(Mano mano, Carta carta) {
        mano.sumarMulti(4);
    }
}