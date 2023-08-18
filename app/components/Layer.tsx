type Props = React.PropsWithChildren<{
  className?: string;
}>;

export default function Layout({ children, className }: Props) {
  return (
    <div
      className={`
        absolute
        -inset-[5vw]
        flex
        items-center
        justify-center
        bg-cover
        bg-center
        ${className ? className : ''}
      `}
    >
      {children}
    </div>
  );
}
