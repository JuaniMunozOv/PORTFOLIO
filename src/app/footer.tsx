export function Footer() {
    const currentYear = new Date().getFullYear(); // Obtén el año actual

    return (
        <footer className="bg-black text-white py-6">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center">
                    <p>© {currentYear} - Juan Ignacio Muñoz. Todos los derechos reservados.</p>
                    <p>Desarrollado con ❤️ por Juan Ignacio Muñoz</p>
                </div>
            </div>
        </footer>
    );
};


