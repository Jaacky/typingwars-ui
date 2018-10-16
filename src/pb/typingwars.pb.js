/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.typingwars = (function() {

    /**
     * Namespace typingwars.
     * @exports typingwars
     * @namespace
     */
    var typingwars = {};

    /**
     * UserInput enum.
     * @name typingwars.UserInput
     * @enum {string}
     * @property {number} KEY=0 KEY value
     */
    typingwars.UserInput = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "KEY"] = 0;
        return values;
    })();

    typingwars.UserAction = (function() {

        /**
         * Properties of a UserAction.
         * @memberof typingwars
         * @interface IUserAction
         * @property {typingwars.UserInput|null} [userInput] UserAction userInput
         */

        /**
         * Constructs a new UserAction.
         * @memberof typingwars
         * @classdesc Represents a UserAction.
         * @implements IUserAction
         * @constructor
         * @param {typingwars.IUserAction=} [properties] Properties to set
         */
        function UserAction(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserAction userInput.
         * @member {typingwars.UserInput} userInput
         * @memberof typingwars.UserAction
         * @instance
         */
        UserAction.prototype.userInput = 0;

        /**
         * Creates a new UserAction instance using the specified properties.
         * @function create
         * @memberof typingwars.UserAction
         * @static
         * @param {typingwars.IUserAction=} [properties] Properties to set
         * @returns {typingwars.UserAction} UserAction instance
         */
        UserAction.create = function create(properties) {
            return new UserAction(properties);
        };

        /**
         * Encodes the specified UserAction message. Does not implicitly {@link typingwars.UserAction.verify|verify} messages.
         * @function encode
         * @memberof typingwars.UserAction
         * @static
         * @param {typingwars.IUserAction} message UserAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAction.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userInput != null && message.hasOwnProperty("userInput"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userInput);
            return writer;
        };

        /**
         * Encodes the specified UserAction message, length delimited. Does not implicitly {@link typingwars.UserAction.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.UserAction
         * @static
         * @param {typingwars.IUserAction} message UserAction message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserAction.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserAction message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.UserAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.UserAction} UserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAction.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.UserAction();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userInput = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserAction message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.UserAction
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.UserAction} UserAction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserAction.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserAction message.
         * @function verify
         * @memberof typingwars.UserAction
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserAction.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.userInput != null && message.hasOwnProperty("userInput"))
                switch (message.userInput) {
                default:
                    return "userInput: enum value expected";
                case 0:
                    break;
                }
            return null;
        };

        /**
         * Creates a UserAction message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.UserAction
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.UserAction} UserAction
         */
        UserAction.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.UserAction)
                return object;
            var message = new $root.typingwars.UserAction();
            switch (object.userInput) {
            case "KEY":
            case 0:
                message.userInput = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a UserAction message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.UserAction
         * @static
         * @param {typingwars.UserAction} message UserAction
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserAction.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.userInput = options.enums === String ? "KEY" : 0;
            if (message.userInput != null && message.hasOwnProperty("userInput"))
                object.userInput = options.enums === String ? $root.typingwars.UserInput[message.userInput] : message.userInput;
            return object;
        };

        /**
         * Converts this UserAction to JSON.
         * @function toJSON
         * @memberof typingwars.UserAction
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserAction.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserAction;
    })();

    typingwars.RegisterPlayer = (function() {

        /**
         * Properties of a RegisterPlayer.
         * @memberof typingwars
         * @interface IRegisterPlayer
         * @property {string|null} [username] RegisterPlayer username
         */

        /**
         * Constructs a new RegisterPlayer.
         * @memberof typingwars
         * @classdesc Represents a RegisterPlayer.
         * @implements IRegisterPlayer
         * @constructor
         * @param {typingwars.IRegisterPlayer=} [properties] Properties to set
         */
        function RegisterPlayer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterPlayer username.
         * @member {string} username
         * @memberof typingwars.RegisterPlayer
         * @instance
         */
        RegisterPlayer.prototype.username = "";

        /**
         * Creates a new RegisterPlayer instance using the specified properties.
         * @function create
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {typingwars.IRegisterPlayer=} [properties] Properties to set
         * @returns {typingwars.RegisterPlayer} RegisterPlayer instance
         */
        RegisterPlayer.create = function create(properties) {
            return new RegisterPlayer(properties);
        };

        /**
         * Encodes the specified RegisterPlayer message. Does not implicitly {@link typingwars.RegisterPlayer.verify|verify} messages.
         * @function encode
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {typingwars.IRegisterPlayer} message RegisterPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPlayer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified RegisterPlayer message, length delimited. Does not implicitly {@link typingwars.RegisterPlayer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {typingwars.IRegisterPlayer} message RegisterPlayer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterPlayer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterPlayer message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.RegisterPlayer} RegisterPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPlayer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.RegisterPlayer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterPlayer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.RegisterPlayer} RegisterPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterPlayer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterPlayer message.
         * @function verify
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterPlayer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a RegisterPlayer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.RegisterPlayer} RegisterPlayer
         */
        RegisterPlayer.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.RegisterPlayer)
                return object;
            var message = new $root.typingwars.RegisterPlayer();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a RegisterPlayer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.RegisterPlayer
         * @static
         * @param {typingwars.RegisterPlayer} message RegisterPlayer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterPlayer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this RegisterPlayer to JSON.
         * @function toJSON
         * @memberof typingwars.RegisterPlayer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterPlayer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterPlayer;
    })();

    typingwars.CreateRoomRequest = (function() {

        /**
         * Properties of a CreateRoomRequest.
         * @memberof typingwars
         * @interface ICreateRoomRequest
         * @property {string|null} [username] CreateRoomRequest username
         */

        /**
         * Constructs a new CreateRoomRequest.
         * @memberof typingwars
         * @classdesc Represents a CreateRoomRequest.
         * @implements ICreateRoomRequest
         * @constructor
         * @param {typingwars.ICreateRoomRequest=} [properties] Properties to set
         */
        function CreateRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRequest username.
         * @member {string} username
         * @memberof typingwars.CreateRoomRequest
         * @instance
         */
        CreateRoomRequest.prototype.username = "";

        /**
         * Creates a new CreateRoomRequest instance using the specified properties.
         * @function create
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {typingwars.ICreateRoomRequest=} [properties] Properties to set
         * @returns {typingwars.CreateRoomRequest} CreateRoomRequest instance
         */
        CreateRoomRequest.create = function create(properties) {
            return new CreateRoomRequest(properties);
        };

        /**
         * Encodes the specified CreateRoomRequest message. Does not implicitly {@link typingwars.CreateRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {typingwars.ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRequest message, length delimited. Does not implicitly {@link typingwars.CreateRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {typingwars.ICreateRoomRequest} message CreateRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.CreateRoomRequest} CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.CreateRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.CreateRoomRequest} CreateRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRequest message.
         * @function verify
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a CreateRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.CreateRoomRequest} CreateRoomRequest
         */
        CreateRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.CreateRoomRequest)
                return object;
            var message = new $root.typingwars.CreateRoomRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.CreateRoomRequest
         * @static
         * @param {typingwars.CreateRoomRequest} message CreateRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.username = "";
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this CreateRoomRequest to JSON.
         * @function toJSON
         * @memberof typingwars.CreateRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomRequest;
    })();

    typingwars.JoinRoomRequest = (function() {

        /**
         * Properties of a JoinRoomRequest.
         * @memberof typingwars
         * @interface IJoinRoomRequest
         * @property {string|null} [username] JoinRoomRequest username
         * @property {string|null} [roomId] JoinRoomRequest roomId
         */

        /**
         * Constructs a new JoinRoomRequest.
         * @memberof typingwars
         * @classdesc Represents a JoinRoomRequest.
         * @implements IJoinRoomRequest
         * @constructor
         * @param {typingwars.IJoinRoomRequest=} [properties] Properties to set
         */
        function JoinRoomRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomRequest username.
         * @member {string} username
         * @memberof typingwars.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.username = "";

        /**
         * JoinRoomRequest roomId.
         * @member {string} roomId
         * @memberof typingwars.JoinRoomRequest
         * @instance
         */
        JoinRoomRequest.prototype.roomId = "";

        /**
         * Creates a new JoinRoomRequest instance using the specified properties.
         * @function create
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {typingwars.IJoinRoomRequest=} [properties] Properties to set
         * @returns {typingwars.JoinRoomRequest} JoinRoomRequest instance
         */
        JoinRoomRequest.create = function create(properties) {
            return new JoinRoomRequest(properties);
        };

        /**
         * Encodes the specified JoinRoomRequest message. Does not implicitly {@link typingwars.JoinRoomRequest.verify|verify} messages.
         * @function encode
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {typingwars.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomRequest message, length delimited. Does not implicitly {@link typingwars.JoinRoomRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {typingwars.IJoinRoomRequest} message JoinRoomRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.JoinRoomRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.roomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.JoinRoomRequest} JoinRoomRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomRequest message.
         * @function verify
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            return null;
        };

        /**
         * Creates a JoinRoomRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.JoinRoomRequest} JoinRoomRequest
         */
        JoinRoomRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.JoinRoomRequest)
                return object;
            var message = new $root.typingwars.JoinRoomRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.JoinRoomRequest
         * @static
         * @param {typingwars.JoinRoomRequest} message JoinRoomRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.username = "";
                object.roomId = "";
            }
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            return object;
        };

        /**
         * Converts this JoinRoomRequest to JSON.
         * @function toJSON
         * @memberof typingwars.JoinRoomRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomRequest;
    })();

    typingwars.Player = (function() {

        /**
         * Properties of a Player.
         * @memberof typingwars
         * @interface IPlayer
         * @property {string|null} [id] Player id
         * @property {string|null} [username] Player username
         */

        /**
         * Constructs a new Player.
         * @memberof typingwars
         * @classdesc Represents a Player.
         * @implements IPlayer
         * @constructor
         * @param {typingwars.IPlayer=} [properties] Properties to set
         */
        function Player(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Player id.
         * @member {string} id
         * @memberof typingwars.Player
         * @instance
         */
        Player.prototype.id = "";

        /**
         * Player username.
         * @member {string} username
         * @memberof typingwars.Player
         * @instance
         */
        Player.prototype.username = "";

        /**
         * Creates a new Player instance using the specified properties.
         * @function create
         * @memberof typingwars.Player
         * @static
         * @param {typingwars.IPlayer=} [properties] Properties to set
         * @returns {typingwars.Player} Player instance
         */
        Player.create = function create(properties) {
            return new Player(properties);
        };

        /**
         * Encodes the specified Player message. Does not implicitly {@link typingwars.Player.verify|verify} messages.
         * @function encode
         * @memberof typingwars.Player
         * @static
         * @param {typingwars.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified Player message, length delimited. Does not implicitly {@link typingwars.Player.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.Player
         * @static
         * @param {typingwars.IPlayer} message Player message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Player.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Player message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.Player();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.username = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Player message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.Player
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.Player} Player
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Player.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Player message.
         * @function verify
         * @memberof typingwars.Player
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Player.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a Player message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.Player
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.Player} Player
         */
        Player.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.Player)
                return object;
            var message = new $root.typingwars.Player();
            if (object.id != null)
                message.id = String(object.id);
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a Player message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.Player
         * @static
         * @param {typingwars.Player} message Player
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Player.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.username = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.username != null && message.hasOwnProperty("username"))
                object.username = message.username;
            return object;
        };

        /**
         * Converts this Player to JSON.
         * @function toJSON
         * @memberof typingwars.Player
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Player.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Player;
    })();

    typingwars.JoinRoomAck = (function() {

        /**
         * Properties of a JoinRoomAck.
         * @memberof typingwars
         * @interface IJoinRoomAck
         * @property {string|null} [clientId] JoinRoomAck clientId
         */

        /**
         * Constructs a new JoinRoomAck.
         * @memberof typingwars
         * @classdesc Represents a JoinRoomAck.
         * @implements IJoinRoomAck
         * @constructor
         * @param {typingwars.IJoinRoomAck=} [properties] Properties to set
         */
        function JoinRoomAck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinRoomAck clientId.
         * @member {string} clientId
         * @memberof typingwars.JoinRoomAck
         * @instance
         */
        JoinRoomAck.prototype.clientId = "";

        /**
         * Creates a new JoinRoomAck instance using the specified properties.
         * @function create
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {typingwars.IJoinRoomAck=} [properties] Properties to set
         * @returns {typingwars.JoinRoomAck} JoinRoomAck instance
         */
        JoinRoomAck.create = function create(properties) {
            return new JoinRoomAck(properties);
        };

        /**
         * Encodes the specified JoinRoomAck message. Does not implicitly {@link typingwars.JoinRoomAck.verify|verify} messages.
         * @function encode
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {typingwars.IJoinRoomAck} message JoinRoomAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
            return writer;
        };

        /**
         * Encodes the specified JoinRoomAck message, length delimited. Does not implicitly {@link typingwars.JoinRoomAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {typingwars.IJoinRoomAck} message JoinRoomAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinRoomAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinRoomAck message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.JoinRoomAck} JoinRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.JoinRoomAck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a JoinRoomAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.JoinRoomAck} JoinRoomAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinRoomAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinRoomAck message.
         * @function verify
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinRoomAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isString(message.clientId))
                    return "clientId: string expected";
            return null;
        };

        /**
         * Creates a JoinRoomAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.JoinRoomAck} JoinRoomAck
         */
        JoinRoomAck.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.JoinRoomAck)
                return object;
            var message = new $root.typingwars.JoinRoomAck();
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            return message;
        };

        /**
         * Creates a plain object from a JoinRoomAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.JoinRoomAck
         * @static
         * @param {typingwars.JoinRoomAck} message JoinRoomAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinRoomAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.clientId = "";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
            return object;
        };

        /**
         * Converts this JoinRoomAck to JSON.
         * @function toJSON
         * @memberof typingwars.JoinRoomAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinRoomAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinRoomAck;
    })();

    typingwars.UpdateRoom = (function() {

        /**
         * Properties of an UpdateRoom.
         * @memberof typingwars
         * @interface IUpdateRoom
         * @property {string|null} [roomId] UpdateRoom roomId
         * @property {Object.<string,typingwars.IPlayer>|null} [players] UpdateRoom players
         * @property {Object.<string,boolean>|null} [readyStatus] UpdateRoom readyStatus
         */

        /**
         * Constructs a new UpdateRoom.
         * @memberof typingwars
         * @classdesc Represents an UpdateRoom.
         * @implements IUpdateRoom
         * @constructor
         * @param {typingwars.IUpdateRoom=} [properties] Properties to set
         */
        function UpdateRoom(properties) {
            this.players = {};
            this.readyStatus = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UpdateRoom roomId.
         * @member {string} roomId
         * @memberof typingwars.UpdateRoom
         * @instance
         */
        UpdateRoom.prototype.roomId = "";

        /**
         * UpdateRoom players.
         * @member {Object.<string,typingwars.IPlayer>} players
         * @memberof typingwars.UpdateRoom
         * @instance
         */
        UpdateRoom.prototype.players = $util.emptyObject;

        /**
         * UpdateRoom readyStatus.
         * @member {Object.<string,boolean>} readyStatus
         * @memberof typingwars.UpdateRoom
         * @instance
         */
        UpdateRoom.prototype.readyStatus = $util.emptyObject;

        /**
         * Creates a new UpdateRoom instance using the specified properties.
         * @function create
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {typingwars.IUpdateRoom=} [properties] Properties to set
         * @returns {typingwars.UpdateRoom} UpdateRoom instance
         */
        UpdateRoom.create = function create(properties) {
            return new UpdateRoom(properties);
        };

        /**
         * Encodes the specified UpdateRoom message. Does not implicitly {@link typingwars.UpdateRoom.verify|verify} messages.
         * @function encode
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {typingwars.IUpdateRoom} message UpdateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoom.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.roomId);
            if (message.players != null && message.hasOwnProperty("players"))
                for (var keys = Object.keys(message.players), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.typingwars.Player.encode(message.players[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.readyStatus != null && message.hasOwnProperty("readyStatus"))
                for (var keys = Object.keys(message.readyStatus), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.readyStatus[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UpdateRoom message, length delimited. Does not implicitly {@link typingwars.UpdateRoom.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {typingwars.IUpdateRoom} message UpdateRoom message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UpdateRoom.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an UpdateRoom message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.UpdateRoom} UpdateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoom.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.UpdateRoom(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomId = reader.string();
                    break;
                case 2:
                    reader.skip().pos++;
                    if (message.players === $util.emptyObject)
                        message.players = {};
                    key = reader.string();
                    reader.pos++;
                    message.players[key] = $root.typingwars.Player.decode(reader, reader.uint32());
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.readyStatus === $util.emptyObject)
                        message.readyStatus = {};
                    key = reader.string();
                    reader.pos++;
                    message.readyStatus[key] = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an UpdateRoom message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.UpdateRoom} UpdateRoom
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UpdateRoom.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an UpdateRoom message.
         * @function verify
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UpdateRoom.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                if (!$util.isString(message.roomId))
                    return "roomId: string expected";
            if (message.players != null && message.hasOwnProperty("players")) {
                if (!$util.isObject(message.players))
                    return "players: object expected";
                var key = Object.keys(message.players);
                for (var i = 0; i < key.length; ++i) {
                    var error = $root.typingwars.Player.verify(message.players[key[i]]);
                    if (error)
                        return "players." + error;
                }
            }
            if (message.readyStatus != null && message.hasOwnProperty("readyStatus")) {
                if (!$util.isObject(message.readyStatus))
                    return "readyStatus: object expected";
                var key = Object.keys(message.readyStatus);
                for (var i = 0; i < key.length; ++i)
                    if (typeof message.readyStatus[key[i]] !== "boolean")
                        return "readyStatus: boolean{k:string} expected";
            }
            return null;
        };

        /**
         * Creates an UpdateRoom message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.UpdateRoom} UpdateRoom
         */
        UpdateRoom.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.UpdateRoom)
                return object;
            var message = new $root.typingwars.UpdateRoom();
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.players) {
                if (typeof object.players !== "object")
                    throw TypeError(".typingwars.UpdateRoom.players: object expected");
                message.players = {};
                for (var keys = Object.keys(object.players), i = 0; i < keys.length; ++i) {
                    if (typeof object.players[keys[i]] !== "object")
                        throw TypeError(".typingwars.UpdateRoom.players: object expected");
                    message.players[keys[i]] = $root.typingwars.Player.fromObject(object.players[keys[i]]);
                }
            }
            if (object.readyStatus) {
                if (typeof object.readyStatus !== "object")
                    throw TypeError(".typingwars.UpdateRoom.readyStatus: object expected");
                message.readyStatus = {};
                for (var keys = Object.keys(object.readyStatus), i = 0; i < keys.length; ++i)
                    message.readyStatus[keys[i]] = Boolean(object.readyStatus[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from an UpdateRoom message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.UpdateRoom
         * @static
         * @param {typingwars.UpdateRoom} message UpdateRoom
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UpdateRoom.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.players = {};
                object.readyStatus = {};
            }
            if (options.defaults)
                object.roomId = "";
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                object.roomId = message.roomId;
            var keys2;
            if (message.players && (keys2 = Object.keys(message.players)).length) {
                object.players = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.players[keys2[j]] = $root.typingwars.Player.toObject(message.players[keys2[j]], options);
            }
            if (message.readyStatus && (keys2 = Object.keys(message.readyStatus)).length) {
                object.readyStatus = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.readyStatus[keys2[j]] = message.readyStatus[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this UpdateRoom to JSON.
         * @function toJSON
         * @memberof typingwars.UpdateRoom
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UpdateRoom.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UpdateRoom;
    })();

    typingwars.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof typingwars
         * @interface IUserMessage
         * @property {typingwars.IUserAction|null} [userAction] UserMessage userAction
         * @property {typingwars.IRegisterPlayer|null} [registerPlayer] UserMessage registerPlayer
         * @property {typingwars.ICreateRoomRequest|null} [createRoomRequest] UserMessage createRoomRequest
         * @property {typingwars.IJoinRoomRequest|null} [joinRoomRequest] UserMessage joinRoomRequest
         * @property {typingwars.IJoinRoomAck|null} [joinRoomAck] UserMessage joinRoomAck
         * @property {typingwars.IUpdateRoom|null} [updateRoom] UserMessage updateRoom
         */

        /**
         * Constructs a new UserMessage.
         * @memberof typingwars
         * @classdesc Represents a UserMessage.
         * @implements IUserMessage
         * @constructor
         * @param {typingwars.IUserMessage=} [properties] Properties to set
         */
        function UserMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserMessage userAction.
         * @member {typingwars.IUserAction|null|undefined} userAction
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.userAction = null;

        /**
         * UserMessage registerPlayer.
         * @member {typingwars.IRegisterPlayer|null|undefined} registerPlayer
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.registerPlayer = null;

        /**
         * UserMessage createRoomRequest.
         * @member {typingwars.ICreateRoomRequest|null|undefined} createRoomRequest
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.createRoomRequest = null;

        /**
         * UserMessage joinRoomRequest.
         * @member {typingwars.IJoinRoomRequest|null|undefined} joinRoomRequest
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.joinRoomRequest = null;

        /**
         * UserMessage joinRoomAck.
         * @member {typingwars.IJoinRoomAck|null|undefined} joinRoomAck
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.joinRoomAck = null;

        /**
         * UserMessage updateRoom.
         * @member {typingwars.IUpdateRoom|null|undefined} updateRoom
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.updateRoom = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * UserMessage content.
         * @member {"userAction"|"registerPlayer"|"createRoomRequest"|"joinRoomRequest"|"joinRoomAck"|"updateRoom"|undefined} content
         * @memberof typingwars.UserMessage
         * @instance
         */
        Object.defineProperty(UserMessage.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["userAction", "registerPlayer", "createRoomRequest", "joinRoomRequest", "joinRoomAck", "updateRoom"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserMessage instance using the specified properties.
         * @function create
         * @memberof typingwars.UserMessage
         * @static
         * @param {typingwars.IUserMessage=} [properties] Properties to set
         * @returns {typingwars.UserMessage} UserMessage instance
         */
        UserMessage.create = function create(properties) {
            return new UserMessage(properties);
        };

        /**
         * Encodes the specified UserMessage message. Does not implicitly {@link typingwars.UserMessage.verify|verify} messages.
         * @function encode
         * @memberof typingwars.UserMessage
         * @static
         * @param {typingwars.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.userAction != null && message.hasOwnProperty("userAction"))
                $root.typingwars.UserAction.encode(message.userAction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.registerPlayer != null && message.hasOwnProperty("registerPlayer"))
                $root.typingwars.RegisterPlayer.encode(message.registerPlayer, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest"))
                $root.typingwars.CreateRoomRequest.encode(message.createRoomRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest"))
                $root.typingwars.JoinRoomRequest.encode(message.joinRoomRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.joinRoomAck != null && message.hasOwnProperty("joinRoomAck"))
                $root.typingwars.JoinRoomAck.encode(message.joinRoomAck, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.updateRoom != null && message.hasOwnProperty("updateRoom"))
                $root.typingwars.UpdateRoom.encode(message.updateRoom, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified UserMessage message, length delimited. Does not implicitly {@link typingwars.UserMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.UserMessage
         * @static
         * @param {typingwars.IUserMessage} message UserMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.UserMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userAction = $root.typingwars.UserAction.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.registerPlayer = $root.typingwars.RegisterPlayer.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.createRoomRequest = $root.typingwars.CreateRoomRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.joinRoomRequest = $root.typingwars.JoinRoomRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.joinRoomAck = $root.typingwars.JoinRoomAck.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.updateRoom = $root.typingwars.UpdateRoom.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.UserMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.UserMessage} UserMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserMessage message.
         * @function verify
         * @memberof typingwars.UserMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.userAction != null && message.hasOwnProperty("userAction")) {
                properties.content = 1;
                {
                    var error = $root.typingwars.UserAction.verify(message.userAction);
                    if (error)
                        return "userAction." + error;
                }
            }
            if (message.registerPlayer != null && message.hasOwnProperty("registerPlayer")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.RegisterPlayer.verify(message.registerPlayer);
                    if (error)
                        return "registerPlayer." + error;
                }
            }
            if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.CreateRoomRequest.verify(message.createRoomRequest);
                    if (error)
                        return "createRoomRequest." + error;
                }
            }
            if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.JoinRoomRequest.verify(message.joinRoomRequest);
                    if (error)
                        return "joinRoomRequest." + error;
                }
            }
            if (message.joinRoomAck != null && message.hasOwnProperty("joinRoomAck")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.JoinRoomAck.verify(message.joinRoomAck);
                    if (error)
                        return "joinRoomAck." + error;
                }
            }
            if (message.updateRoom != null && message.hasOwnProperty("updateRoom")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.UpdateRoom.verify(message.updateRoom);
                    if (error)
                        return "updateRoom." + error;
                }
            }
            return null;
        };

        /**
         * Creates a UserMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.UserMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.UserMessage} UserMessage
         */
        UserMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.UserMessage)
                return object;
            var message = new $root.typingwars.UserMessage();
            if (object.userAction != null) {
                if (typeof object.userAction !== "object")
                    throw TypeError(".typingwars.UserMessage.userAction: object expected");
                message.userAction = $root.typingwars.UserAction.fromObject(object.userAction);
            }
            if (object.registerPlayer != null) {
                if (typeof object.registerPlayer !== "object")
                    throw TypeError(".typingwars.UserMessage.registerPlayer: object expected");
                message.registerPlayer = $root.typingwars.RegisterPlayer.fromObject(object.registerPlayer);
            }
            if (object.createRoomRequest != null) {
                if (typeof object.createRoomRequest !== "object")
                    throw TypeError(".typingwars.UserMessage.createRoomRequest: object expected");
                message.createRoomRequest = $root.typingwars.CreateRoomRequest.fromObject(object.createRoomRequest);
            }
            if (object.joinRoomRequest != null) {
                if (typeof object.joinRoomRequest !== "object")
                    throw TypeError(".typingwars.UserMessage.joinRoomRequest: object expected");
                message.joinRoomRequest = $root.typingwars.JoinRoomRequest.fromObject(object.joinRoomRequest);
            }
            if (object.joinRoomAck != null) {
                if (typeof object.joinRoomAck !== "object")
                    throw TypeError(".typingwars.UserMessage.joinRoomAck: object expected");
                message.joinRoomAck = $root.typingwars.JoinRoomAck.fromObject(object.joinRoomAck);
            }
            if (object.updateRoom != null) {
                if (typeof object.updateRoom !== "object")
                    throw TypeError(".typingwars.UserMessage.updateRoom: object expected");
                message.updateRoom = $root.typingwars.UpdateRoom.fromObject(object.updateRoom);
            }
            return message;
        };

        /**
         * Creates a plain object from a UserMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.UserMessage
         * @static
         * @param {typingwars.UserMessage} message UserMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.userAction != null && message.hasOwnProperty("userAction")) {
                object.userAction = $root.typingwars.UserAction.toObject(message.userAction, options);
                if (options.oneofs)
                    object.content = "userAction";
            }
            if (message.registerPlayer != null && message.hasOwnProperty("registerPlayer")) {
                object.registerPlayer = $root.typingwars.RegisterPlayer.toObject(message.registerPlayer, options);
                if (options.oneofs)
                    object.content = "registerPlayer";
            }
            if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest")) {
                object.createRoomRequest = $root.typingwars.CreateRoomRequest.toObject(message.createRoomRequest, options);
                if (options.oneofs)
                    object.content = "createRoomRequest";
            }
            if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest")) {
                object.joinRoomRequest = $root.typingwars.JoinRoomRequest.toObject(message.joinRoomRequest, options);
                if (options.oneofs)
                    object.content = "joinRoomRequest";
            }
            if (message.joinRoomAck != null && message.hasOwnProperty("joinRoomAck")) {
                object.joinRoomAck = $root.typingwars.JoinRoomAck.toObject(message.joinRoomAck, options);
                if (options.oneofs)
                    object.content = "joinRoomAck";
            }
            if (message.updateRoom != null && message.hasOwnProperty("updateRoom")) {
                object.updateRoom = $root.typingwars.UpdateRoom.toObject(message.updateRoom, options);
                if (options.oneofs)
                    object.content = "updateRoom";
            }
            return object;
        };

        /**
         * Converts this UserMessage to JSON.
         * @function toJSON
         * @memberof typingwars.UserMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return UserMessage;
    })();

    return typingwars;
})();

module.exports = $root;
