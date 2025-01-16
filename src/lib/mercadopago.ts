import { MercadoPagoConfig, Preference } from "mercadopago";

const client = new MercadoPagoConfig({
  accessToken: process.env.MP_TOKEN as string
});

const pref = new Preference(client);

type CreatePrefOptions = {
  productName: string;
  productDescription: string;
  productId: string;
  productPrice: number;
  userEmail?: string;
  transactionId?: string;
};

// Recibimos data más generica en esta función
// para abstraer al resto del sistema
// de los detalles de mercado pago
// esto nos permitirá hacer cambios dentro de esta librería
// sin tener que modificar el resto del sistema

export async function createSingleProductPreference(
  options: CreatePrefOptions
) {
  return pref.create({
    body: {
      items: [
        {
          id: options.productId,
          title: options.productName,
          description: options.productDescription,
          quantity: 1,
          currency_id: "ARS",
          unit_price: options.productPrice,
        },
      ],
      payer: {
        email: options.userEmail,
      },
      // URL de redirección en los distintos casos
      back_urls: {
        success: "https://donate-app-kappa.vercel.app/payment/status",
        failure: "https://test.com/failure",
        pending: "https://test.com/pending",
      },
      // Esto puede ser el id o algún otro identificador
      // que te ayude a vincular este pago con el producto más adelante
      external_reference: options.transactionId,
    },
  });
}

