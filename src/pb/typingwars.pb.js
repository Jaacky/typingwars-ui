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

    typingwars.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof typingwars
         * @interface IMessage
         * @property {typingwars.IPlayerJoined|null} [playerJoined] Message playerJoined
         */

        /**
         * Constructs a new Message.
         * @memberof typingwars
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {typingwars.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message playerJoined.
         * @member {typingwars.IPlayerJoined|null|undefined} playerJoined
         * @memberof typingwars.Message
         * @instance
         */
        Message.prototype.playerJoined = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * Message content.
         * @member {"playerJoined"|undefined} content
         * @memberof typingwars.Message
         * @instance
         */
        Object.defineProperty(Message.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["playerJoined"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof typingwars.Message
         * @static
         * @param {typingwars.IMessage=} [properties] Properties to set
         * @returns {typingwars.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link typingwars.Message.verify|verify} messages.
         * @function encode
         * @memberof typingwars.Message
         * @static
         * @param {typingwars.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.playerJoined != null && message.hasOwnProperty("playerJoined"))
                $root.typingwars.PlayerJoined.encode(message.playerJoined, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link typingwars.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.Message
         * @static
         * @param {typingwars.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.playerJoined = $root.typingwars.PlayerJoined.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof typingwars.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.playerJoined != null && message.hasOwnProperty("playerJoined")) {
                properties.content = 1;
                {
                    var error = $root.typingwars.PlayerJoined.verify(message.playerJoined);
                    if (error)
                        return "playerJoined." + error;
                }
            }
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.Message)
                return object;
            var message = new $root.typingwars.Message();
            if (object.playerJoined != null) {
                if (typeof object.playerJoined !== "object")
                    throw TypeError(".typingwars.Message.playerJoined: object expected");
                message.playerJoined = $root.typingwars.PlayerJoined.fromObject(object.playerJoined);
            }
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.Message
         * @static
         * @param {typingwars.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.playerJoined != null && message.hasOwnProperty("playerJoined")) {
                object.playerJoined = $root.typingwars.PlayerJoined.toObject(message.playerJoined, options);
                if (options.oneofs)
                    object.content = "playerJoined";
            }
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof typingwars.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    typingwars.PlayerJoined = (function() {

        /**
         * Properties of a PlayerJoined.
         * @memberof typingwars
         * @interface IPlayerJoined
         * @property {string|null} [id] PlayerJoined id
         * @property {string|null} [username] PlayerJoined username
         */

        /**
         * Constructs a new PlayerJoined.
         * @memberof typingwars
         * @classdesc Represents a PlayerJoined.
         * @implements IPlayerJoined
         * @constructor
         * @param {typingwars.IPlayerJoined=} [properties] Properties to set
         */
        function PlayerJoined(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerJoined id.
         * @member {string} id
         * @memberof typingwars.PlayerJoined
         * @instance
         */
        PlayerJoined.prototype.id = "";

        /**
         * PlayerJoined username.
         * @member {string} username
         * @memberof typingwars.PlayerJoined
         * @instance
         */
        PlayerJoined.prototype.username = "";

        /**
         * Creates a new PlayerJoined instance using the specified properties.
         * @function create
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {typingwars.IPlayerJoined=} [properties] Properties to set
         * @returns {typingwars.PlayerJoined} PlayerJoined instance
         */
        PlayerJoined.create = function create(properties) {
            return new PlayerJoined(properties);
        };

        /**
         * Encodes the specified PlayerJoined message. Does not implicitly {@link typingwars.PlayerJoined.verify|verify} messages.
         * @function encode
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {typingwars.IPlayerJoined} message PlayerJoined message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerJoined.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified PlayerJoined message, length delimited. Does not implicitly {@link typingwars.PlayerJoined.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {typingwars.IPlayerJoined} message PlayerJoined message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerJoined.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerJoined message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.PlayerJoined} PlayerJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerJoined.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.PlayerJoined();
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
         * Decodes a PlayerJoined message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.PlayerJoined} PlayerJoined
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerJoined.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerJoined message.
         * @function verify
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerJoined.verify = function verify(message) {
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
         * Creates a PlayerJoined message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.PlayerJoined} PlayerJoined
         */
        PlayerJoined.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.PlayerJoined)
                return object;
            var message = new $root.typingwars.PlayerJoined();
            if (object.id != null)
                message.id = String(object.id);
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a PlayerJoined message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.PlayerJoined
         * @static
         * @param {typingwars.PlayerJoined} message PlayerJoined
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerJoined.toObject = function toObject(message, options) {
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
         * Converts this PlayerJoined to JSON.
         * @function toJSON
         * @memberof typingwars.PlayerJoined
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerJoined.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerJoined;
    })();

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

    typingwars.CreateGameRequest = (function() {

        /**
         * Properties of a CreateGameRequest.
         * @memberof typingwars
         * @interface ICreateGameRequest
         * @property {string|null} [username] CreateGameRequest username
         */

        /**
         * Constructs a new CreateGameRequest.
         * @memberof typingwars
         * @classdesc Represents a CreateGameRequest.
         * @implements ICreateGameRequest
         * @constructor
         * @param {typingwars.ICreateGameRequest=} [properties] Properties to set
         */
        function CreateGameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateGameRequest username.
         * @member {string} username
         * @memberof typingwars.CreateGameRequest
         * @instance
         */
        CreateGameRequest.prototype.username = "";

        /**
         * Creates a new CreateGameRequest instance using the specified properties.
         * @function create
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {typingwars.ICreateGameRequest=} [properties] Properties to set
         * @returns {typingwars.CreateGameRequest} CreateGameRequest instance
         */
        CreateGameRequest.create = function create(properties) {
            return new CreateGameRequest(properties);
        };

        /**
         * Encodes the specified CreateGameRequest message. Does not implicitly {@link typingwars.CreateGameRequest.verify|verify} messages.
         * @function encode
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {typingwars.ICreateGameRequest} message CreateGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            return writer;
        };

        /**
         * Encodes the specified CreateGameRequest message, length delimited. Does not implicitly {@link typingwars.CreateGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {typingwars.ICreateGameRequest} message CreateGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.CreateGameRequest} CreateGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.CreateGameRequest();
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
         * Decodes a CreateGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.CreateGameRequest} CreateGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateGameRequest message.
         * @function verify
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateGameRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.username != null && message.hasOwnProperty("username"))
                if (!$util.isString(message.username))
                    return "username: string expected";
            return null;
        };

        /**
         * Creates a CreateGameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.CreateGameRequest} CreateGameRequest
         */
        CreateGameRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.CreateGameRequest)
                return object;
            var message = new $root.typingwars.CreateGameRequest();
            if (object.username != null)
                message.username = String(object.username);
            return message;
        };

        /**
         * Creates a plain object from a CreateGameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.CreateGameRequest
         * @static
         * @param {typingwars.CreateGameRequest} message CreateGameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateGameRequest.toObject = function toObject(message, options) {
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
         * Converts this CreateGameRequest to JSON.
         * @function toJSON
         * @memberof typingwars.CreateGameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateGameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateGameRequest;
    })();

    typingwars.JoinGameRequest = (function() {

        /**
         * Properties of a JoinGameRequest.
         * @memberof typingwars
         * @interface IJoinGameRequest
         * @property {string|null} [username] JoinGameRequest username
         * @property {string|null} [roomId] JoinGameRequest roomId
         */

        /**
         * Constructs a new JoinGameRequest.
         * @memberof typingwars
         * @classdesc Represents a JoinGameRequest.
         * @implements IJoinGameRequest
         * @constructor
         * @param {typingwars.IJoinGameRequest=} [properties] Properties to set
         */
        function JoinGameRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinGameRequest username.
         * @member {string} username
         * @memberof typingwars.JoinGameRequest
         * @instance
         */
        JoinGameRequest.prototype.username = "";

        /**
         * JoinGameRequest roomId.
         * @member {string} roomId
         * @memberof typingwars.JoinGameRequest
         * @instance
         */
        JoinGameRequest.prototype.roomId = "";

        /**
         * Creates a new JoinGameRequest instance using the specified properties.
         * @function create
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {typingwars.IJoinGameRequest=} [properties] Properties to set
         * @returns {typingwars.JoinGameRequest} JoinGameRequest instance
         */
        JoinGameRequest.create = function create(properties) {
            return new JoinGameRequest(properties);
        };

        /**
         * Encodes the specified JoinGameRequest message. Does not implicitly {@link typingwars.JoinGameRequest.verify|verify} messages.
         * @function encode
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {typingwars.IJoinGameRequest} message JoinGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGameRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && message.hasOwnProperty("username"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.username);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            return writer;
        };

        /**
         * Encodes the specified JoinGameRequest message, length delimited. Does not implicitly {@link typingwars.JoinGameRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {typingwars.IJoinGameRequest} message JoinGameRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGameRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGameRequest message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.JoinGameRequest} JoinGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGameRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.JoinGameRequest();
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
         * Decodes a JoinGameRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.JoinGameRequest} JoinGameRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGameRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinGameRequest message.
         * @function verify
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinGameRequest.verify = function verify(message) {
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
         * Creates a JoinGameRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.JoinGameRequest} JoinGameRequest
         */
        JoinGameRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.JoinGameRequest)
                return object;
            var message = new $root.typingwars.JoinGameRequest();
            if (object.username != null)
                message.username = String(object.username);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            return message;
        };

        /**
         * Creates a plain object from a JoinGameRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.JoinGameRequest
         * @static
         * @param {typingwars.JoinGameRequest} message JoinGameRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinGameRequest.toObject = function toObject(message, options) {
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
         * Converts this JoinGameRequest to JSON.
         * @function toJSON
         * @memberof typingwars.JoinGameRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGameRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinGameRequest;
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

    typingwars.JoinGameAck = (function() {

        /**
         * Properties of a JoinGameAck.
         * @memberof typingwars
         * @interface IJoinGameAck
         * @property {string|null} [clientId] JoinGameAck clientId
         * @property {string|null} [roomId] JoinGameAck roomId
         * @property {Object.<string,typingwars.IPlayer>|null} [players] JoinGameAck players
         * @property {Object.<string,boolean>|null} [readyStatus] JoinGameAck readyStatus
         */

        /**
         * Constructs a new JoinGameAck.
         * @memberof typingwars
         * @classdesc Represents a JoinGameAck.
         * @implements IJoinGameAck
         * @constructor
         * @param {typingwars.IJoinGameAck=} [properties] Properties to set
         */
        function JoinGameAck(properties) {
            this.players = {};
            this.readyStatus = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * JoinGameAck clientId.
         * @member {string} clientId
         * @memberof typingwars.JoinGameAck
         * @instance
         */
        JoinGameAck.prototype.clientId = "";

        /**
         * JoinGameAck roomId.
         * @member {string} roomId
         * @memberof typingwars.JoinGameAck
         * @instance
         */
        JoinGameAck.prototype.roomId = "";

        /**
         * JoinGameAck players.
         * @member {Object.<string,typingwars.IPlayer>} players
         * @memberof typingwars.JoinGameAck
         * @instance
         */
        JoinGameAck.prototype.players = $util.emptyObject;

        /**
         * JoinGameAck readyStatus.
         * @member {Object.<string,boolean>} readyStatus
         * @memberof typingwars.JoinGameAck
         * @instance
         */
        JoinGameAck.prototype.readyStatus = $util.emptyObject;

        /**
         * Creates a new JoinGameAck instance using the specified properties.
         * @function create
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {typingwars.IJoinGameAck=} [properties] Properties to set
         * @returns {typingwars.JoinGameAck} JoinGameAck instance
         */
        JoinGameAck.create = function create(properties) {
            return new JoinGameAck(properties);
        };

        /**
         * Encodes the specified JoinGameAck message. Does not implicitly {@link typingwars.JoinGameAck.verify|verify} messages.
         * @function encode
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {typingwars.IJoinGameAck} message JoinGameAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGameAck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.clientId);
            if (message.roomId != null && message.hasOwnProperty("roomId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roomId);
            if (message.players != null && message.hasOwnProperty("players"))
                for (var keys = Object.keys(message.players), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]);
                    $root.typingwars.Player.encode(message.players[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.readyStatus != null && message.hasOwnProperty("readyStatus"))
                for (var keys = Object.keys(message.readyStatus), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).bool(message.readyStatus[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified JoinGameAck message, length delimited. Does not implicitly {@link typingwars.JoinGameAck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {typingwars.IJoinGameAck} message JoinGameAck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        JoinGameAck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a JoinGameAck message from the specified reader or buffer.
         * @function decode
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {typingwars.JoinGameAck} JoinGameAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGameAck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.typingwars.JoinGameAck(), key;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.clientId = reader.string();
                    break;
                case 2:
                    message.roomId = reader.string();
                    break;
                case 3:
                    reader.skip().pos++;
                    if (message.players === $util.emptyObject)
                        message.players = {};
                    key = reader.string();
                    reader.pos++;
                    message.players[key] = $root.typingwars.Player.decode(reader, reader.uint32());
                    break;
                case 4:
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
         * Decodes a JoinGameAck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {typingwars.JoinGameAck} JoinGameAck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        JoinGameAck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a JoinGameAck message.
         * @function verify
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        JoinGameAck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                if (!$util.isString(message.clientId))
                    return "clientId: string expected";
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
         * Creates a JoinGameAck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {typingwars.JoinGameAck} JoinGameAck
         */
        JoinGameAck.fromObject = function fromObject(object) {
            if (object instanceof $root.typingwars.JoinGameAck)
                return object;
            var message = new $root.typingwars.JoinGameAck();
            if (object.clientId != null)
                message.clientId = String(object.clientId);
            if (object.roomId != null)
                message.roomId = String(object.roomId);
            if (object.players) {
                if (typeof object.players !== "object")
                    throw TypeError(".typingwars.JoinGameAck.players: object expected");
                message.players = {};
                for (var keys = Object.keys(object.players), i = 0; i < keys.length; ++i) {
                    if (typeof object.players[keys[i]] !== "object")
                        throw TypeError(".typingwars.JoinGameAck.players: object expected");
                    message.players[keys[i]] = $root.typingwars.Player.fromObject(object.players[keys[i]]);
                }
            }
            if (object.readyStatus) {
                if (typeof object.readyStatus !== "object")
                    throw TypeError(".typingwars.JoinGameAck.readyStatus: object expected");
                message.readyStatus = {};
                for (var keys = Object.keys(object.readyStatus), i = 0; i < keys.length; ++i)
                    message.readyStatus[keys[i]] = Boolean(object.readyStatus[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a JoinGameAck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof typingwars.JoinGameAck
         * @static
         * @param {typingwars.JoinGameAck} message JoinGameAck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        JoinGameAck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults) {
                object.players = {};
                object.readyStatus = {};
            }
            if (options.defaults) {
                object.clientId = "";
                object.roomId = "";
            }
            if (message.clientId != null && message.hasOwnProperty("clientId"))
                object.clientId = message.clientId;
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
         * Converts this JoinGameAck to JSON.
         * @function toJSON
         * @memberof typingwars.JoinGameAck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        JoinGameAck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return JoinGameAck;
    })();

    typingwars.UserMessage = (function() {

        /**
         * Properties of a UserMessage.
         * @memberof typingwars
         * @interface IUserMessage
         * @property {typingwars.IUserAction|null} [userAction] UserMessage userAction
         * @property {typingwars.IRegisterPlayer|null} [registerPlayer] UserMessage registerPlayer
         * @property {typingwars.ICreateGameRequest|null} [createGameRequest] UserMessage createGameRequest
         * @property {typingwars.IJoinGameRequest|null} [joinGameRequest] UserMessage joinGameRequest
         * @property {typingwars.IJoinGameAck|null} [joinGameAck] UserMessage joinGameAck
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
         * UserMessage createGameRequest.
         * @member {typingwars.ICreateGameRequest|null|undefined} createGameRequest
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.createGameRequest = null;

        /**
         * UserMessage joinGameRequest.
         * @member {typingwars.IJoinGameRequest|null|undefined} joinGameRequest
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.joinGameRequest = null;

        /**
         * UserMessage joinGameAck.
         * @member {typingwars.IJoinGameAck|null|undefined} joinGameAck
         * @memberof typingwars.UserMessage
         * @instance
         */
        UserMessage.prototype.joinGameAck = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        /**
         * UserMessage content.
         * @member {"userAction"|"registerPlayer"|"createGameRequest"|"joinGameRequest"|"joinGameAck"|undefined} content
         * @memberof typingwars.UserMessage
         * @instance
         */
        Object.defineProperty(UserMessage.prototype, "content", {
            get: $util.oneOfGetter($oneOfFields = ["userAction", "registerPlayer", "createGameRequest", "joinGameRequest", "joinGameAck"]),
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
            if (message.createGameRequest != null && message.hasOwnProperty("createGameRequest"))
                $root.typingwars.CreateGameRequest.encode(message.createGameRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.joinGameRequest != null && message.hasOwnProperty("joinGameRequest"))
                $root.typingwars.JoinGameRequest.encode(message.joinGameRequest, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.joinGameAck != null && message.hasOwnProperty("joinGameAck"))
                $root.typingwars.JoinGameAck.encode(message.joinGameAck, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
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
                    message.createGameRequest = $root.typingwars.CreateGameRequest.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.joinGameRequest = $root.typingwars.JoinGameRequest.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.joinGameAck = $root.typingwars.JoinGameAck.decode(reader, reader.uint32());
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
            if (message.createGameRequest != null && message.hasOwnProperty("createGameRequest")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.CreateGameRequest.verify(message.createGameRequest);
                    if (error)
                        return "createGameRequest." + error;
                }
            }
            if (message.joinGameRequest != null && message.hasOwnProperty("joinGameRequest")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.JoinGameRequest.verify(message.joinGameRequest);
                    if (error)
                        return "joinGameRequest." + error;
                }
            }
            if (message.joinGameAck != null && message.hasOwnProperty("joinGameAck")) {
                if (properties.content === 1)
                    return "content: multiple values";
                properties.content = 1;
                {
                    var error = $root.typingwars.JoinGameAck.verify(message.joinGameAck);
                    if (error)
                        return "joinGameAck." + error;
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
            if (object.createGameRequest != null) {
                if (typeof object.createGameRequest !== "object")
                    throw TypeError(".typingwars.UserMessage.createGameRequest: object expected");
                message.createGameRequest = $root.typingwars.CreateGameRequest.fromObject(object.createGameRequest);
            }
            if (object.joinGameRequest != null) {
                if (typeof object.joinGameRequest !== "object")
                    throw TypeError(".typingwars.UserMessage.joinGameRequest: object expected");
                message.joinGameRequest = $root.typingwars.JoinGameRequest.fromObject(object.joinGameRequest);
            }
            if (object.joinGameAck != null) {
                if (typeof object.joinGameAck !== "object")
                    throw TypeError(".typingwars.UserMessage.joinGameAck: object expected");
                message.joinGameAck = $root.typingwars.JoinGameAck.fromObject(object.joinGameAck);
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
            if (message.createGameRequest != null && message.hasOwnProperty("createGameRequest")) {
                object.createGameRequest = $root.typingwars.CreateGameRequest.toObject(message.createGameRequest, options);
                if (options.oneofs)
                    object.content = "createGameRequest";
            }
            if (message.joinGameRequest != null && message.hasOwnProperty("joinGameRequest")) {
                object.joinGameRequest = $root.typingwars.JoinGameRequest.toObject(message.joinGameRequest, options);
                if (options.oneofs)
                    object.content = "joinGameRequest";
            }
            if (message.joinGameAck != null && message.hasOwnProperty("joinGameAck")) {
                object.joinGameAck = $root.typingwars.JoinGameAck.toObject(message.joinGameAck, options);
                if (options.oneofs)
                    object.content = "joinGameAck";
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
