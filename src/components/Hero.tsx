import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative">
            {/* Imagen de fondo */}
            <div className="absolute inset-0 -z-10">
                
                {/* overlay más nítido + contraste */}
                <div className="absolute inset-0 " />
            </div>

            <div className="container py-14">
                <div className="grid gap-6 ">
                    {/* caja principal */}
                    <div className="card p-6">

                        <h1 className="mt-4 text-4xl font-black tracking-tight text-zinc-900 md:text-5xl">
                            El carnaval se canta.
                            <span className="block text-zinc-700">
                                Guarda coplas, crea cancioneros y comparte.
                            </span>
                        </h1>

                        <p className="mt-4 text-sm text-zinc-700">
                            Explora temáticas, arma tu cancionero y comparte links bonitos para WhatsApp/Facebook.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                            <Link href="/explorar" className="btn btn-primary">
                                Explorar coplas
                            </Link>
                            <Link href="/nuevo" className="btn btn-ghost">
                                Publicar una copla
                            </Link>
                        </div>

                        {/* barrita de color */}
                        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-zinc-100">
                            <div
                                className="h-full w-full"
                                style={{
                                    background:
                                        "linear-gradient(90deg, rgb(239,68,68), rgb(251,191,36), rgb(34,197,94), rgb(59,130,246), rgb(101,3,84))",
                                }}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
