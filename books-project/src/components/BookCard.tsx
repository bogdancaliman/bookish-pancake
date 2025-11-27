import { useId, type ReactNode } from "react";
import { PLACEHOLDER_IMAGE } from "../lib/books";
import { useToggle } from "../hooks/useToggle";
import { useImageFallback } from "../hooks/useImageFallback";

type BookCardProps = {
  title: string;
  description?: string;
  imageUrl?: string;
};

export function BookCard({ title, description, imageUrl }: BookCardProps) {
  const descId = useId();
  return (
    <Card>
      <CoverImage src={imageUrl} alt={`Cover of ${title}`} />
      <CardColumn>
        <Title>{title}</Title>
        {description ? (
          <Collapsible labelId={descId}>
            <DescriptionText text={description} />
          </Collapsible>
        ) : (
          <EmptyState message="No description" />
        )}
      </CardColumn>
    </Card>
  );
}

const Card = ({ children }: { children: ReactNode }) => {
  return <li className="flex border rounded-lg p-4 mb-4 gap-5">{children}</li>;
};

const CardColumn = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col flex-1 gap-2">{children}</div>;
};

const CoverImage = ({ src, alt }: { src?: string; alt: string }) => {
  const { hasError, onLoad, onError, showFallbackMessage } = useImageFallback();
  const finalSrc = !src || hasError ? PLACEHOLDER_IMAGE : src;

  return (
    <div className="shrink-0">
      <img
        src={finalSrc}
        alt={alt}
        onLoad={onLoad}
        onError={onError}
        className="w-[200px] h-[150px] object-cover rounded bg-stone-50"
      />
      {showFallbackMessage && (
        <div className="max-w-[200px]">
          <span className="text-sm text-red-500 mt-1">
            Image failed to load - showing placeholder
          </span>
        </div>
      )}
    </div>
  );
};

const Title = ({ children }: { children: ReactNode }) => {
  return <h3 className="m-0 text-2xl font-bold">{children}</h3>;
};

const DescriptionText = ({ text }: { text: string }) => (
  <p className="text-base m-0 leading-relaxed text-gray-600">{text}</p>
);

const EmptyState = ({ message }: { message: string }) => <span>{message}</span>;

const Collapsible = ({
  children,
  labelId,
}: {
  children: ReactNode;
  labelId: string;
}) => {
  const { isOpen, toogle } = useToggle();

  if (!children) return null;

  return (
    <div>
      <button
        className="flex items-center gap-1 bg-none border-none text-blue-600 p-0 cursor-pointer text-left text-sm "
        onClick={toogle}
        aria-expanded={isOpen}
        aria-controls={labelId}
      >
        {isOpen ? "Hide" : "Show"} Description
      </button>
      {isOpen && <div id={labelId}>{children}</div>}
    </div>
  );
};
