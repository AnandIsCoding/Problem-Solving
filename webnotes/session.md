**Session Management in Web Development**
Session management is a technique used in web development to maintain a user's state and data across multiple requests. Since HTTP is a stateless protocol (it does not retain user information between requests), session management helps track user activities, such as login status, shopping carts, and preferences.

**How Session Management Works?**
User initiates a session

When a user logs in or accesses a website, a session ID is created.
Session ID is stored and shared

The server assigns a unique session ID to the user.
This ID is stored either in:
Cookies (most common)
URL parameters (less secure)
Hidden form fields
Server maintains session data

The session ID is linked to user data stored on the server (e.g., login info, shopping cart items).
On each request, the session ID is sent back to the server to retrieve user-specific data.
Session expires or is destroyed

A session ends when:
The user logs out.
The session times out due to inactivity.
The browser is closed (for temporary sessions).
The server explicitly destroys the session.
Common Methods of Session Management
Cookies-Based Sessions

Stores session ID in browser cookies.
Example: Set-Cookie: session_id=abcd1234; HttpOnly; Secure; SameSite=Strict
Token-Based Sessions (JWT - JSON Web Tokens)

Instead of storing sessions on the server, JWTs are sent with every request.
Ideal for stateless authentication.
Server-Side Sessions

The session ID is stored in the database or memory (e.g., Redis).
More secure than client-side storage.