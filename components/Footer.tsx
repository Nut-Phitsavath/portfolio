export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-border">
            <div className="max-w-6xl mx-auto text-center text-muted-foreground">
                <p>&copy; {new Date().getFullYear()} Nattaphonh Phitsavath. Built with Next.js & TypeScript.</p>
            </div>
        </footer>
    );
}
