"""
SafeSpace — https_server.py
Serves the site over HTTPS on https://localhost:8443
Uses cert.pem / key.pem in the same directory.
Run: python https_server.py
"""

import http.server
import ssl
import os
import sys

PORT     = 8443
CERTFILE = os.path.join(os.path.dirname(__file__), "cert.pem")
KEYFILE  = os.path.join(os.path.dirname(__file__), "key.pem")

if not os.path.exists(CERTFILE) or not os.path.exists(KEYFILE):
    print("ERROR: cert.pem / key.pem not found. Run generate_cert.py first.")
    sys.exit(1)


class SilentHandler(http.server.SimpleHTTPRequestHandler):
    """SimpleHTTPRequestHandler with cleaner log output."""
    def log_message(self, fmt, *args):
        print(f"  [{self.address_string()}] {fmt % args}")


handler = SilentHandler
server  = http.server.HTTPServer(("localhost", PORT), handler)

ctx = ssl.SSLContext(ssl.PROTOCOL_TLS_SERVER)
ctx.load_cert_chain(certfile=CERTFILE, keyfile=KEYFILE)
server.socket = ctx.wrap_socket(server.socket, server_side=True)

print(f"\n  [HTTPS] SafeSpace server running")
print(f"  Open: https://localhost:{PORT}\n")
print("  Note: Your browser will show a security warning because the cert")
print("  is self-signed. Click Advanced -> Proceed to localhost to continue.")
print("\n  Press Ctrl+C to stop.\n")

try:
    server.serve_forever()
except KeyboardInterrupt:
    print("\n  Server stopped.")
