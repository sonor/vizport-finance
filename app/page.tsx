import { Widget } from './components/Widget';
import { WidgetEvents } from './components/WidgetEvents';
import Header from './components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <WidgetEvents />
        <Widget />
      </main>
    </>
  );
}
