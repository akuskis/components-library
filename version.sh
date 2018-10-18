#!/usr/bin/env bash

SETTINGS_FILE="package.json"

# =============================================================================
# Functions
# =============================================================================

usage()
{
    cat << EOF
Help:

    --can-publish
        Checks that the current version is not yet released (can be published).

    -h, --help
        Show help.
EOF
}

function errcho
{
    >&2 echo "$@"
}

function get_package_name
{
    sed -rne 's/.*"name":\s"(\S*)".*/\1/p' "${SETTINGS_FILE}"
}

function get_current_version
{
    sed -rne 's/.*"version":\s"(\S*)".*/\1/p' "${SETTINGS_FILE}"
}

function was_released
{
    PACKAGE_NAME=`get_package_name`
    CURRENT_VERSION=`get_current_version`

    FULL_PACKAGE_NAME="${PACKAGE_NAME}@${CURRENT_VERSION}"

    if [ -z "$(npm info ${FULL_PACKAGE_NAME})" ]
    then
        return 1
    fi
}

# =============================================================================
# Parse arguments
# =============================================================================

while [[ $# > 0 ]]
do
key="$1"

case $key in
    --can-publish)
        if was_released; then
            errcho "This version was already released"
            exit 1
        fi
        echo "Can be published"
        exit 0
        ;;
    -h|--help|*)
        usage
        exit 0
        ;;
esac
shift # past argument or value
done
