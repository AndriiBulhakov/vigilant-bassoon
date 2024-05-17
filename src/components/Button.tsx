import style from 'styled-jsx/style';

type IButtonProps = {
  children: string,
  className?: string,
};

const Button = (props: IButtonProps) => {
  return (
    <div className={`btn ${props.className}`}>
      {props.children}

      <style jsx>
        {`
          .btn {
            @apply inline-block rounded-lg text-center py-5 px-7;
          }

          .btn-primary {
            @apply bg-gray-primary text-white-primary;
          }

          .btn-primary:hover {
            @apply bg-red-primary;
          }

          .btn-secondary {
            @apply bg-red-primary text-white-primary;
          }

          .btn-secondary:hover {
            @apply bg-gray-primary;
          }

          .btn-tetriary {
            @apply bg-white-primary text-gray-primary;
          }

          .btn-tertiary:hover {
            @apply bg-gray-primary text-white-primary;
          }

          .btn-quaternary {
            @apply border-2 border-gray-primary text-gray-primary bg-transparent py-[1.125rem] px-[1.625rem];
          }
        `}
      </style>
    </div>
  )
};

export { Button };
