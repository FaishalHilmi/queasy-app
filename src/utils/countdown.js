export default function countdown(callback) {
  const countdown = setInterval(() => {
    callback((prev) => {
      if (prev <= 1) {
        clearInterval(countdown);
        return 0;
      }
      return prev - 1;
    });
  }, 1000);

  return () => clearInterval(countdown);
}
