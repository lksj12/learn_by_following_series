export default function ErrorBanner({ message }) {
    const errorMessage = message || "Error! Something went wrong. Please try again later.";
    return(
        <div
            data-testid="error-banner"
            style= {{ backgroundColor: "red", color: "white"}}
            >
                {errorMessage}
            </div>
    )
}