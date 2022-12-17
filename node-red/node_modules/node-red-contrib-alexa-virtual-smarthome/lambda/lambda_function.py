"""
NodeRED Alexa SmartHome

Copyright 2022 Claudio Chimera <Claudio.Chimera at gmail.com>.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
"""

import os
import json
import logging
import urllib3

_debug = bool(os.environ.get('DEBUG'))

_logger = logging.getLogger('NodeRED-SmartHome')
_logger.setLevel(logging.DEBUG if _debug else logging.INFO)


def lambda_handler(event, context):
    """Handle incoming Alexa directive."""

    _logger.debug('Event: %s', event)

    base_url = os.environ.get('BASE_URL')
    assert base_url is not None, 'Please set BASE_URL environment variable'

    http = urllib3.PoolManager(
        cert_reqs='CERT_REQUIRED',
        timeout=urllib3.Timeout(connect=2.0, read=10.0)
    )

    response = http.request(
        'POST',
        base_url,
        headers={
            'Content-Type': 'application/json',
        },
        body=json.dumps(event).encode('utf-8'),
    )
    if response.status >= 400:
        return {
            'event': {
                'payload': {
                    'type': 'INVALID_AUTHORIZATION_CREDENTIAL'
                    if response.status in (401, 403) else 'INTERNAL_ERROR',
                    'message': response.data.decode("utf-8"),
                }
            }
        }
    return json.loads(response.data.decode('utf-8'))
