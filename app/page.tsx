import { Widget } from './components/Widget';
import { WidgetEvents } from './components/WidgetEvents';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center min-h-screen">
        <WidgetEvents />
        <Widget />
      </main>
    </>
  );
}
