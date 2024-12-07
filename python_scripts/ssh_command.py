from paramiko import SSHClient, AutoAddPolicy

host = data.get('host', '172.17.0.1')
port = data.get('port', 22)
username = data.get('user', 'pi')
password = data.get('pass', 'raspberry')
command = data.get('command')

client = SSHClient()
client.set_missing_host_key_policy(AutoAddPolicy())
client.connect(host, port, username, password)
stdin, stdout, stderr = client.exec_command(command)
resp = stdout.read()
stderr.read()
client.close()

logger.info(f"SSH response:\n{ resp.decode() }")