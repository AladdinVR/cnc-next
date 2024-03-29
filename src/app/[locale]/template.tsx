import "../layout.css";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="Core">{children}</div>;
}
