import Link from 'next/link';

const HomePage = () => (
    <div className="flex flex-row bg-slate-400">
        <li>
          <Link href="/">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">
            Sign in
          </Link>
        </li>
        </div>
);

export { HomePage };
